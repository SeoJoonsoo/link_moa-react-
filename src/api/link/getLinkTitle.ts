import { VITE_API_ROOT } from '@/constants';
import { Response } from '@/types';
import axios from 'axios';

type Data = Response & {
  data: {
    link: {
      title: string | null;
    };
  };
};

export default async function getLinkTitle(url: string) {
  let data: Data = await axios
    .get(`${VITE_API_ROOT}/Link/siteTitle?url=${url}`)
    .then((response: { data: Data }) => {
      if (response.data.status === 'success') {
        return response.data;
      } else {
        return {
          status: response.data.status,
          message: response.data.message,
          data: {
            link: {
              title: null,
            },
          },
        };
      }
    })
    .catch((e) => {
      console.log('get error: ', e);
      return {
        status: 'error',
        message: `getLinkTitle 요청 에러 : ${e}`,
        data: {
          link: {
            title: null,
          },
        },
      };
    });

  return data;
}