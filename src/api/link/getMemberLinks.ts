import { VITE_API_ROOT } from '@/constants';
import { LinkInfo, Response } from '@/types';
import axios from 'axios';

type Data = Response & {
  data: {
    memberLinks: LinkInfo[];
  };
};

export default async function getMemberLinks() {
  let data: Data = await axios
    .get(`${VITE_API_ROOT}/Link`)
    .then((response: { data: Data }) => {
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
        message: `getMemberLinks 요청 에러 : ${e}`,
        data: {
          memberLinks: [],
        },
      };
    });
  return data;
}
