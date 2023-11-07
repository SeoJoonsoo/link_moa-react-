import { VITE_API_ROOT } from '@/constants';
import { LinkStatus, MemberLinkInfo, Response, Tag } from '@/types';
import axios from 'axios';

type Data = Response & {
  data: {
    memberLinks: MemberLinkInfo[];
  };
};

export default async function createMemberLink(url: string, name: string, tags: Tag[], status: LinkStatus) {
  const data: Data = await axios
    .post(
      `${VITE_API_ROOT}/Link`,
      {
        url,
        name,
        tags: tags.map((tag) => tag.name),
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
