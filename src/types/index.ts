export type RepsonseStatus = 'success' | 'fail' | 'error';

// api 공통 응답
export type Response = {
  status: 'success' | 'fail' | 'error';
  message: string;
};

export type LinkStatus = 'keep' | 'keep-going' | 'read';

export type LinkInfo = {
  link_id: string;
  link_url: string;
  member_link_name: string;
};

export type EditMemberLinkInfo = Pick<LinkInfo, 'link_url' | 'member_link_name'> & {
  member_link_id?: string;
  writer: null | string; // TODO : 백 구현 중
  writed_date: null | string; // TODO : 백 구현 중
  tags: string[]; // TODO : 백 구현 중
  status: LinkStatus; // TODO : 백 구현 중
};

// LinkInfo -> MemberLinkInfo
export type MemberLinkInfo = Omit<EditMemberLinkInfo, 'member_link_id'> & {
  member_link_id: string; // id
  member_id: string;
  link_id: string;
  created_at: string; // createdAt
  updated_at: null | string; // updatedAt
  deleted_at: null | string;
};
