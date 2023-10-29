import { Link } from 'react-router-dom';
import Logo from '@/assets/images/Header/logo.svg';
import Logout from '@/assets/images/Header/ic-logout.svg';
import * as S from './style';
import logout from '@/api/member/logout';
import { useAppDispatch } from '@/redux/hooks';

type Props = {
  isLogin: boolean;
  className: string;
};

export default function Header({ isLogin, className }: Props) {
  const dispatch = useAppDispatch();

  const onClickLogout = () => {
    dispatch(logout());
  };

  return (
    <S.Header className={className}>
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
      {isLogin && (
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
