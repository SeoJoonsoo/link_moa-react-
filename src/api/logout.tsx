import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Data = {
  isLogin: boolean;
  status: string;
  message: string;
};

const logout = createAsyncThunk('/member/logout', async () => {
  const data: Data = await axios
    .get(`${import.meta.env.VITE_API_ROOT}/member/logout`)
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
