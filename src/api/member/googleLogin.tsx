import { VITE_API_ROOT, VITE_GOOGLE_CLIENT_ID } from '@/constants';
import axios from 'axios';
import 'https://apis.google.com/js/platform.js?onload=init';

export default function googleAuthInit() {
  let gauth: any, googleAuth: any;
  window.gapi.load('auth2', function () {
    /* Ready. Make a call to gapi.auth2.init or some other API */
    gauth = window.gapi.auth2.init({
      client_id: `${VITE_GOOGLE_CLIENT_ID}`,
    });

    gauth.then(
      function () {
        console.log('google auth init success');
      },
      function (e: any) {
        console.error('google auth init fail', e);
      },
    );

    googleAuth = window.gapi.auth2.getAuthInstance();
  });

  function onClickGoogleLoginButton() {
    gauth.signIn().then(function () {
      const googleUser = googleAuth.currentUser.get();
      // const userId = googleUser.getId();
      const basicProfile = googleUser.getBasicProfile();
      // TODO : 나중에 전역으로 유저정보 가지고 있기
      const userProfile = {
        id: basicProfile.getId(),
        name: basicProfile.getName(),
        imageUrl: basicProfile.getImageUrl(),
        email: basicProfile.getEmail(),
      };
      const authResponse = googleUser.getAuthResponse();
      console.log('Logined');
      console.log('userProfile: ', userProfile);
      console.log('authResponse: ', authResponse);
      console.log('isSignedIn: ', googleAuth.isSignedIn.get());

      const data = {
        sso_provider: 'google',
        sso_token: authResponse.id_token,
        nickname: userProfile.name,
        email: userProfile.email,
      };

      // 데이터를 x-www-form-urlencoded 형식으로 변환
      function jsonToUrlEncoded(json: { [key: string]: string }) {
        const formData = new URLSearchParams();

        for (const key in json) {
          if (json.hasOwnProperty(key)) {
            formData.append(key, json[key]);
          }
        }

        return formData.toString();
      }

      const urlEncodedData = jsonToUrlEncoded(data);
      axios
        .post(VITE_API_ROOT + '/member/createMember', urlEncodedData, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then(function (response) {
          console.log('회원가입 성공 : ', response);
        })
        .catch(function (error) {
          console.log('회원가입 실패 : ', error);
        });
    });
  }
  function onClickGoogleLogoutButton() {
    gauth.signOut().then(function () {
      console.log('Logouted');
      console.log('isSignedIn: ', googleAuth.isSignedIn.get());
    });
  }
  function isGoogleLogined() {
    // 로그인 여부 체크
    if (googleAuth.isSignedIn.get()) {
      //반환값 : 로그인 상태 boolean
      console.log('로그인 중');
    } else {
      console.log('로그아웃 됨');
    }
  }

  return { gauth, googleAuth, onClickGoogleLoginButton, onClickGoogleLogoutButton, isGoogleLogined };
}
