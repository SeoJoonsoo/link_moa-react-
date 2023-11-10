import { Response } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api';

type ResponseOfLogout = Response & {
  isLogin: boolean;
};

const logout = createAsyncThunk('/member/logout', async () => {
  const data: ResponseOfLogout = await instance
    .post('/member/logout')
    .then((response: { data: ResponseOfLogout }) => {
      return response.data;
    })
    .catch((e) => {
      return {
        isLogin: false,
        status: 'error',
        message: `logout error : ${e}`,
      };
    });

  return data;
});

export default logout;
