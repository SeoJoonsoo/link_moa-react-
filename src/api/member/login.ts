import { createAsyncThunk } from '@reduxjs/toolkit';
import { Response } from '@/types';
import { instance } from '../api';

type ResponseOfLogin = Response & {
  isLogin: boolean;
  data: {
    memberInfo: {
      email: null | string;
      nickname: null | string;
    };
  };
};

async function loginMemberInfo() {
  const data: ResponseOfLogin = await instance
    .get('/member/info')
    .then(function (response: { data: ResponseOfLogin }) {
      if (response.data.status === 'success') {
        return response.data;
      } else {
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
      return {
        isLogin: false,
        message: error,
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

// 로그인시 사용
const login = createAsyncThunk('member/loginMemberInfo', async () => {
  return await loginMemberInfo();
});

// member정보 재조회시 사용
export const getMemberInfo = createAsyncThunk('member/getMemberInfo', async () => {
  return await loginMemberInfo();
});

export default login;
