import * as S from './style';
import GOOGLE_LOGO from '@/assets/images/Welcome/easy-login/ic-google.svg';
import NAVER_LOGO from '@/assets/images/Welcome/easy-login/ic-naver.svg';
import { Link } from 'react-router-dom';

export default function Welcome() {
  const EASY_LOGIN_GOOGLE = ''; // TODO : 간편 로그인 링크 추가
  const EASY_LOGIN_NAVER = ''; // TODO : 간편 로그인 링크 추가
  return (
    <S.Wrapper>
      <S.SlideSection id="slide-section">
        <div className="slide-wrapper">welcome 슬라이드 Section</div>
      </S.SlideSection>
      <S.LoginSection id="login-section">
        <p className="description">간편 로그인으로 빠르게 시작해보세요</p>
        <div className="easy-login">
          <Link to={EASY_LOGIN_GOOGLE} id="google" className="easy-login__button">
            <img src={GOOGLE_LOGO} alt="" />
          </Link>
          <Link to={EASY_LOGIN_NAVER} id="naver" className="easy-login__button">
            <img src={NAVER_LOGO} alt="" />
          </Link>
        </div>
      </S.LoginSection>
    </S.Wrapper>
  );
}
