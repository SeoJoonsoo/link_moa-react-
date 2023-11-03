import { MemberLinkInfo } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
export default memberLinksSlice.reducer;
