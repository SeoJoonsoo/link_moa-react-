import axios from 'axios';

// 로그인 실패 시 data 안에 memberInfo 없음 '.' 유저를 찾을 수 없어서 못준다고함
type Response = {
  isLogin: boolean;
  message: string;
  status: 'success' | 'fail' | 'error';
  data: {
    memberInfo: {
      email: null | string;
      nickname: null | string;
    };
  };
};

export default async function naverLogin(): Promise<Response> {
  const data: Response = await axios
    .get(import.meta.env.VITE_API_ROOT + '/member/loginMemberInfo', {
      withCredentials: true,
    })
    .then(function (response) {
      if (response.data.status === 'success') {
        console.log('로그인 성공: ', response);
        return response.data;
      } else {
        console.log('로그인 실패: ', response);
        return {
          isLogin: response.data.isLogin,
          message: response.data.message,
          status: response.data.status,
          data: {
            memberInfo: {
              email: null,
              nickname: null,
            },
          },
        };
      }
    })
    .catch(function (error) {
      console.log('로그인 에러: ', error);
      return {
        isLogin: false,
        message: 'naverLogin API error',
        status: 'error',
        data: {
          memberInfo: {
            email: null,
            nickname: null,
          },
        },
      };
    });
  return data;
}
