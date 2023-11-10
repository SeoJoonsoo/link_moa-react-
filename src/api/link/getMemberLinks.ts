import { ResponseOfMemberLinks } from '@/types';
import { instance } from '../api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getMemberLinks = createAsyncThunk('link/getMemberLinks', async () => {
  const data: ResponseOfMemberLinks = await instance
    .get(`/Link`)
    .then((response: { data: ResponseOfMemberLinks }) => {
      console.log('전체 링크 정보 요청 응답', response);
      if (response.data.status === 'success') {
        return response.data;
      } else {
        return {
          status: response.data.status,
          message: response.data.message,
          data: {
            memberLinks: [],
          },
        };
      }
    })
    .catch((e) => {
      console.log('get error: ', e);
      return {
        status: 'error',
        message: `전체 링크 정보 요청 에러 : ${e}`,
        data: {
          memberLinks: [],
        },
      };
    });
  return data;
});

export default getMemberLinks;
