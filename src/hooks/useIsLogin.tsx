import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import { getMemberInfo } from '@/api/member/login';

// 로그인 여부에 따라 리다이렉션 시킴
// 로그인하지 않은 유저는 /welcome 페이지만 볼 수 있습니다.

export default function useIsLogin(): { isLogin: boolean } {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = useAppSelector((state) => state.isLogin.isLogin);
  const memberInfo = useAppSelector((state) => state.member);

  useEffect(() => {
    const currentPath = location.pathname;
    // TODO : 이슈. isLogin이 다른 탭에서도 같은 값이 유지되길 바래서 redux-persist를 사용했는데
    // isLogin이 다른 탭에서 변경된 경우 localstorage에는 바로 반영되지만,
    // store에는 새로고침 해야지만 반영됨.
    if (isLogin) {
      if (memberInfo.email === null) {
        dispatch(getMemberInfo());
      }
      if (currentPath.includes('welcome') || currentPath.includes('naverLogin') || currentPath.includes('localLogin')) {
        navigate('/');
      }
    } else {
      navigate('/welcome');
    }
  }, [isLogin, location.pathname]);

  return { isLogin };
}
