import { VITE_API_ROOT } from '@/constants';
import { LinkInfo, Response } from '@/types';
import { instance } from '../api';

// url과 일치하는 linkInfo가 없다면 -> linkInfo: null

type Data = Response & {
  data: {
    linkInfo: null | LinkInfo;
  };
};

export async function getLinkInfo(url: string) {
  let data: Data = await instance
    .get(`${VITE_API_ROOT}/Link?url=${encodeURI(url)}`)
    .then((response: { data: Data }) => {
      if (response.data.status === 'success') {
        console.log(response);
        return response.data;
      } else {
        return {
          status: response.data.status,
          message: response.data.message,
          data: {
            linkInfo: null,
          },
        };
      }
    })
    .catch((e) => {
      console.log('get error: ', e);
      return {
        status: 'error',
        message: `getLinkInfo 요청 에러 : ${e}`,
        data: {
          linkInfo: null,
        },
      };
    });
  return data;
}
