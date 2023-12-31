export type RepsonseStatus = 'success' | 'fail' | 'error';

// api 공통 응답
export type Response = {
  status: 'success' | 'fail' | 'error';
  message: string;
};

// memberLinkInfo[]를 받는 응답
export type ResponseOfMemberLinks = Response & {
  data: {
    memberLinks: MemberLinkInfo[];
  };
};

// saved => keep
// In Progress => keep-going
// Completed => read
export type LinkStatus = 'Saved' | 'In Progress' | 'Completed';

export type Tag = { name: string; order: number };

export type EditMemberLinkInfo = {
  member_link_id?: string;
  link_url: string;
  member_link_name: string;
  writer: null | string; // TODO : 백 구현 중
  writed_date: null | string; // TODO : 백 구현 중
  tags: Tag[];
  member_link_status: LinkStatus;
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
