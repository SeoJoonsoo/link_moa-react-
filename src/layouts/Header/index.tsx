import { Link } from 'react-router-dom';
import Logo from '@/assets/images/Header/logo.svg';
import Logout from '@/assets/images/Header/ic-logout.svg';
import * as S from './style';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // TODO: 로그인 시 true. (지금은 임의로 true)
    setIsLogin(true);
  }, []);
  return (
    <S.Header>
      <h1 className="site name">
        <Link to="/">
          KEEP ON
          <img width={150} height={34} src={Logo} alt="logo" />
        </Link>
      </h1>
      {isLogin && (
        <S.LogoutButton>
          <img width={30} height={30} src={Logout} alt="" />
        </S.LogoutButton>
      )}
    </S.Header>
  );
}
