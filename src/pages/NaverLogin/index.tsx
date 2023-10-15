import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { updateMemberInfo } from '@/redux/member'; // getMemberInfo,
import naverLogin from '@/api/naverLogin';
import { updateisLogin } from '@/redux/isLogin';
import { useNavigate } from 'react-router-dom';

export default function NaverLogin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    naverLogin()
      .then((response) => {
        dispatch(
          updateMemberInfo({
            email: response.data.memberInfo.email,
            nickname: response.data.memberInfo.nickname,
            status: response.status,
          }),
        );
        dispatch(
          updateisLogin({
            isLogin: response.isLogin,
            status: response.status,
          }),
        );
        if (response.isLogin) {
          navigate('/');
        } else {
          navigate('/welcome');
        }
      })
      .catch((e) => {
        console.log(e);
        navigate('/welcome');
      });
  }, []);

  return <span>네이버 로그인 중...</span>;
}
