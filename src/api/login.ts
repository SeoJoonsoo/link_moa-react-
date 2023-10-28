import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { VITE_API_ROOT } from '@/constants';

type Data = {
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

async function loginMemberInfo() {
  const data: Data = await axios
    .get(VITE_API_ROOT + '/member/loginMemberInfo', {
      withCredentials: true,
    })
    .then(function (response: { data: Data }) {
      if (response.data.status === 'success') {
        // console.log('member 조회 성공: ', response);
        return response.data;
      } else {
        // console.log('member 조회 실패: ', response);
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
      // console.log('loginMemberInfo 오류: ', error);
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
