import * as S from './style';
import GOOGLE_LOGO from '@/assets/images/Welcome/easy-login/ic-google.svg';
import NAVER_LOGO from '@/assets/images/Welcome/easy-login/ic-naver.svg';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import googleAuthInit from '@/api/googleLogin';
import { useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';
// import naverLoginSDK from '@/api/naverLoginSDK';

declare global {
  interface Window {
    naver: any;
    gapi: any;
    google: any;
  }
}

export default function Welcome() {
  const isLogin = useAppSelector((state) => state.isLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin.isLogin) {
      navigate('/');
    }
  }, []);

  // 네이버 아이디 로그인 요청
  const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID; //process.env.REACT_APP_NAVER_CLIENT_ID;
  const STATE_STRING = import.meta.env.VITE_NAVER_STATE; // 위조방지값
  const CALLBACK_URL = import.meta.env.VITE_API_ROOT + '/member/ssoNaverLoginCallback';
  const EASY_LOGIN_NAVER = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;

  // 구글 로그인 초기화
  let { onClickGoogleLoginButton, isGoogleLogined } = googleAuthInit();

  return (
    <>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <S.Wrapper>
        <S.SlideSection id="slide-section">
          <div className="slide-wrapper">welcome 슬라이드 Section</div>
        </S.SlideSection>
        <S.LoginSection id="login-section">
          <p className="description">간편 로그인으로 빠르게 시작해보세요</p>
          <div className="easy-login">
            {/* 구글 로그인(커스텀버튼) */}
            <button
              id="google"
              className="easy-login__button"
              onClick={() => {
                onClickGoogleLoginButton();
              }}
            >
              <img src={GOOGLE_LOGO} alt="" />
            </button>
            {/* 네이버 로그인(커스텀버튼) */}
            <Link to={EASY_LOGIN_NAVER} id="naver" className="easy-login__button">
              <img src={NAVER_LOGO} alt="" />
            </Link>
          </div>
          {/* TODO : 👇구글 로그인 여부 확인용. 개발 완료후 삭제 */}
          <br />
          <br />
          <button
            id="testIsLogined"
            onClick={() => {
              isGoogleLogined();
            }}
          >
            test : check isLogined google
          </button>
        </S.LoginSection>
      </S.Wrapper>
    </>
  );
}
