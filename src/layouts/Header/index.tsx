import { Link } from 'react-router-dom';
import Logo from '@/assets/images/Header/logo.svg';
import Logout from '@/assets/images/Header/ic-logout.svg';
import * as S from './style';
import logOut from '@/api/logout';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { updateisLogin } from '@/redux/isLogin';
import { deleteMemberInfo } from '@/redux/member';

export default function Header({ ...props }) {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.isLogin);

  const onClickLogout = () => {
    logOut()
      .then((response) => {
        dispatch(
          updateisLogin({
            isLogin: response.isLogin,
            status: response.status,
          }),
        );
        dispatch(deleteMemberInfo());
      })
      .catch((e) => {
        console.log('로그아웃 오류: ', e);
      });
  };

  return (
    <S.Header {...props}>
      <h1 className="site name">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          KEEP ON
          <img width={150} height={34} src={Logo} alt="logo" />
        </Link>
      </h1>
      {isLogin.isLogin && (
        <S.LogoutButton
          onClick={() => {
            onClickLogout();
          }}
        >
          <img width={30} height={30} src={Logout} alt="" />
        </S.LogoutButton>
      )}
    </S.Header>
  );
}
