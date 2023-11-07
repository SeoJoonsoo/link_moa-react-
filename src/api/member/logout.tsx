import { VITE_API_ROOT } from '@/constants';
import { Response } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api';

type Data = Response & {
  isLogin: boolean;
};

const logout = createAsyncThunk('/member/logout', async () => {
  const data: Data = await instance
    .get(`${VITE_API_ROOT}/member/logout`)
    .then((response: { data: Data }) => {
      if (response.data.status === 'success') {
        // console.log('로그아웃 성공', response.data);
      } else {
        // console.log('로그아웃 실패', response.data);
      }
      return response.data;
    })
    .catch((e) => {
      // console.log('로그아웃 요청 실패 :', e);
      return {
        isLogin: false,
        status: 'error',
        message: `logout error : ${e}`,
      };
    });

  return data;
});

export default logout;
