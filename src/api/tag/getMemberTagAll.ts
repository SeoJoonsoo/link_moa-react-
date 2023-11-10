import { VITE_API_ROOT } from '@/constants';
import { Response } from '@/types';
import { instance } from '../api';

// memberTags 내부 태그 순서 : 최신순 정렬
// 저장된 태그가 없다면 memberTags: []
type ResponseOfMemberTags = Response & {
  data: {
    memberTags: string[];
  };
};

export default async function getMemberTagAll(): Promise<ResponseOfMemberTags> {
  const data: ResponseOfMemberTags = await instance
    .get(`${VITE_API_ROOT}/Link/memberTagAll`)
    .then((response: { data: ResponseOfMemberTags }) => {
      console.log('전체 태그 요청 응답: ', response);
      return response.data;
    })
    .catch((e) => {
      console.log('전체 태그 요청 에러', e);
      return {
        status: 'error',
        message: '내부 오류',
        data: {
          memberTags: [],
        },
      };
    });
  return data;
}
