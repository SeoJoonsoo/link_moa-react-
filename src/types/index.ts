export type RepsonseStatus = 'success' | 'fail' | 'error';

// api 공통 응답
export type Response = {
  status: 'success' | 'fail' | 'error';
  message: string;
};

export type LinkStatus = 'keep' | 'keep-going' | 'read';

export type EditLinkInfo = {
  member_link_id?: string;
  member_link_name: string; // title
  link_url: string; // url
  writer: null | string; // TODO : 백 구현 중
  writed_date: null | string; // TODO : 백 구현 중
  tags: string[]; // TODO : 백 구현 중
  status: LinkStatus; // TODO : 백 구현 중
};

export type LinkInfo = Omit<EditLinkInfo, 'member_link_id'> & {
  member_link_id: string; // id
  member_id: string;
  link_id: string;
  created_at: string; // createdAt
  updated_at: null | string; // updatedAt
  deleted_at: null | string;
};
