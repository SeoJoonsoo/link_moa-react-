import { VITE_API_ROOT } from '@/constants';
import { useAppDispatch } from '@/redux/hooks';
import { Response } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect } from 'react';

export default function LocalLogin() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(localLogin());
  }, []);

  return <span>로컬 로그인 중...</span>;
}

type Data = Response & {
  isLogin: boolean;
  data: {
    memberInfo: {
      email: null | string;
      nickname: null | string;
    };
  };
};

type LocalData = Response & {
  data: {
    sessionInfo: {
      isLogin: boolean;
      email: null | string;
      nickname: null | string;
      [info: string]: any;
    };
  };
};

async function localLoginMemberInfo() {
  const data: Data = await axios
    .get(VITE_API_ROOT + '/test/session', {
      withCredentials: true,
    })
    .then(function (response: { data: LocalData }) {
      if (response.data.status === 'success') {
        // console.log('member 조회 성공: ', response);
        return {
          isLogin: response.data.data.sessionInfo.isLogin,
          message: response.data.message,
          status: response.data.status,
          data: {
            memberInfo: {
              email: response.data.data.sessionInfo.email,
              nickname: response.data.data.sessionInfo.nickname,
            },
          },
        };
      } else {
        // console.log('member 조회 실패: ', response);
        return {
          isLogin: response.data.data.sessionInfo.isLogin,
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

export const localLogin = createAsyncThunk('member/localLoginMemberInfo', async () => {
  return await localLoginMemberInfo();
});
