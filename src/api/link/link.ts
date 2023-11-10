import { instance } from '../api';
import { EditMemberLinkInfo, Response } from '@/types';

// url과 일치하는 linkInfo가 없다면 -> linkInfo: null
type ResponseOfLinkInfo = Response & {
  data: {
    linkInfo: null | EditMemberLinkInfo;
  };
};

type LinkTitle = string | null;

type ResponseOfLinkTitle = Response & {
  data: {
    link: {
      title: LinkTitle;
    };
  };
};

const link = {
  getInfo: async (url: string): Promise<ResponseOfLinkInfo> => {
    const data: ResponseOfLinkInfo = await instance
      .get(`/Link?url=${encodeURIComponent(url)}`)
      .then((response: { data: ResponseOfLinkInfo }) => {
        console.log('링크 정보 조회 응답: ', response);
        return response.data;
      })
      .catch((e) => {
        console.log('링크 정보 조회 에러: ', e);
        return {
          status: 'error',
          message: '내부 오류',
          data: {
            linkInfo: null,
          },
        };
      });
    return data;
  },
  getTitle: async (url: string): Promise<LinkTitle> => {
    const linkTitle: LinkTitle = await instance
      .get(`/Link/siteTitle?url=${encodeURIComponent(url)}`)
      .then((response: { data: ResponseOfLinkTitle }) => {
        console.log('링크 타이틀 요청 응답: ', response);
        const title = response.data.data.link.title;
        return response.data.status === 'success' && title ? title : null;
      })
      .catch((e) => {
        console.log('링크 타이틀 요청 에러: ', e);
        return null;
      });

    return linkTitle;
  },
};

export default link;
