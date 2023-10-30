import { LinkInfo } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type MemberLinksState = {
  linkInfo: LinkInfo[];
};

const initialState: MemberLinksState = {
  linkInfo: [],
};

const memberLinksSlice = createSlice({
  name: 'memberLinks',
  initialState,
  reducers: {
    updateMemberLinks(state, action: PayloadAction<LinkInfo[]>) {
      state.linkInfo = action.payload;
    },
  },
});

export const { updateMemberLinks } = memberLinksSlice.actions;
export default memberLinksSlice.reducer;
