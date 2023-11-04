import { VITE_API_ROOT } from '@/constants';
import { LinkStatus, MemberLinkInfo, Response } from '@/types';
import axios from 'axios';

type Data = Response & {
  data: {
    memberLinks: MemberLinkInfo[];
  };
};

export default async function createMemberLink(url: string, name: string, tags: string[], status: LinkStatus) {
  const data: Data = await axios
    .post(
      `${VITE_API_ROOT}/Link`,
      {
        url,
        name,
        tags,
        status,
      },
      {
        headers: {
          'Contest-Type': 'application/json',
        },
        withCredentials: true,
      },
    )
    .then((response: { data: Data }) => {
      console.log('저장 요청 응답: ', response);
      return response.data;
    })
    .catch((e) => {
      console.log('저장 요청 실패: ', e);
      return e.data;
    });
  return data;
}
