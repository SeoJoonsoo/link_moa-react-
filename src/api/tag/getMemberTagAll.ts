import { VITE_API_ROOT } from '@/constants';
import { Response } from '@/types';
import axios from 'axios';

// memberTags 내부 태그 순서 : 최신순 정렬
// 저장된 태그가 없다면 memberTags: []
type Data = Response & {
  data: {
    memberTags: string[];
  };
};

export async function getMemberTagAll() {
  let data: Data = await axios
    .get(`${VITE_API_ROOT}/Link/memberTagAll`)
    .then((response: { data: Data }) => {
      if (response.data.status === 'success') {
        return response.data;
      } else {
        return {
          status: response.data.status,
          message: response.data.message,
          data: {
            memberTags: [],
          },
        };
      }
    })
    .catch((e) => {
      console.log('get error: ', e);
      return {
        status: 'error',
        message: `getMemberTagAll 요청 에러 : ${e}`,
        data: {
          memberTags: [],
        },
      };
    });
  return data;
}
