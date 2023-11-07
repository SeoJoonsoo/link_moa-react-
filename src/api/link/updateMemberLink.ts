import { VITE_API_ROOT } from '@/constants';
import { LinkStatus, MemberLinkInfo, Response, Tag } from '@/types';
import { instance } from '../api';

type Data = Response & {
  data: {
    memberLinks: MemberLinkInfo[];
  };
};

export default async function updateMemberLink(
  member_link_id: string,
  url: string,
  name: string,
  tags: Tag[],
  status: LinkStatus,
) {
  const data: Data = await instance
    .put(`${VITE_API_ROOT}/Link`, {
      id: member_link_id,
      url,
      name,
      tags: tags.map((tag) => tag.name),
      status,
    })
    .then((response: { data: Data }) => {
      return response.data;
    })
    .catch((e) => {
      console.log('수정 요청 실패: ', e);
      return e.data;
    });

  return data;
}
