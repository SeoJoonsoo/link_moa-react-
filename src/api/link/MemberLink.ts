import { EditMemberLinkInfo, LinkStatus, Response, ResponseOfMemberLinks } from '@/types';
import { instance } from '../api';
import { AxiosPromise } from 'axios';

type MemberLink = {
  create: (url: string, name: string, tags: string[], status: LinkStatus) => AxiosPromise<ResponseOfMemberLinks>;
  update: (
    id: string,
    url: string,
    name: string,
    tags: string[],
    status: LinkStatus,
  ) => AxiosPromise<ResponseOfMemberLinks>;
  createOrUpdate: (linkInfo: EditMemberLinkInfo) => Promise<ResponseOfMemberLinks>;
  delete: (member_link_id: string) => Promise<Response>;
};

const memberLink: MemberLink = {
  create: (url, name, tags, status) => {
    return instance.post('/Link', {
      url,
      name,
      tags: tags,
      status,
    });
  },
  update: (id, url, name, tags, status) => {
    return instance.put('/Link', {
      id,
      url,
      name,
      tags: tags,
      status,
    });
  },
  createOrUpdate: async (linkInfo) => {
    const { member_link_id, link_url, member_link_name, tags, member_link_status } = linkInfo;
    // member_link_id의 유무에 따라 수정/추가 요청
    const data: ResponseOfMemberLinks = await (member_link_id
      ? memberLink.update(
          member_link_id,
          link_url,
          member_link_name,
          tags.map((tag) => tag.name),
          member_link_status,
        )
      : memberLink.create(
          link_url,
          member_link_name,
          tags.map((tag) => tag.name),
          member_link_status,
        )
    )
      .then((response: { data: ResponseOfMemberLinks }) => {
        console.log(`${member_link_id ? '수정' : '저장'} 요청 응답: `, response);
        return response.data;
      })
      .catch((e) => {
        console.log(`${member_link_id ? '수정' : '저장'} 요청 에러: `, e);
        return {
          status: 'error',
          message: '내부 오류',
          data: {
            memberLinks: [],
          },
        };
      });
    return data;
  },
  delete: async (member_link_id) => {
    const data: Response = await instance
      .delete(`/Link?id=${member_link_id}`)
      .then((response: { data: Response }) => {
        console.log('삭제 응답: ', response);
        return response.data;
      })
      .catch((e) => {
        console.log('삭제 에러: ', e);
        return {
          status: 'error',
          message: '내부 오류',
        };
      });
    return data;
  },
};

export default memberLink;
