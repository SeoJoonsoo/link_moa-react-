import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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

const login = createAsyncThunk('member/loginMemberInfo', async () => {
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
});

export default login;
