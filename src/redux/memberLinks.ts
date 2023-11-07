import { MemberLinkInfo } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type MemberLinksState = {
  linkInfo: MemberLinkInfo[];
};

const initialState: MemberLinksState = {
  linkInfo: [],
};

const memberLinksSlice = createSlice({
  name: 'memberLinks',
  initialState,
  reducers: {
    updateMemberLinks(state, action: PayloadAction<MemberLinkInfo[]>) {
      state.linkInfo = action.payload;
    },
  },
});

export const { updateMemberLinks } = memberLinksSlice.actions;
export const findLinkInfo = (memberLinks: MemberLinkInfo[], id: string): undefined | MemberLinkInfo => {
  let findedLinkInfo;
  console.log('memberLinks', memberLinks, 'id', id);
  memberLinks.forEach((linkInfo) => {
    if (linkInfo.link_id === id) {
      findedLinkInfo = linkInfo;
      return false;
    }
  });
  if (findedLinkInfo) {
    return findedLinkInfo;
  }
};

export const memberLinkInfos = (state: RootState) => state.memberLinks.linkInfo;
export default memberLinksSlice.reducer;
