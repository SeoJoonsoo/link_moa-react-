import { MemberLinkInfo } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import getMemberLinks from '@/api/link/getMemberLinks';

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
  extraReducers: (builder) => {
    builder.addCase(getMemberLinks.fulfilled, (state, action) => {
      state.linkInfo = action.payload.data.memberLinks;
    });
  },
});

export const { updateMemberLinks } = memberLinksSlice.actions;
export const memberLinkInfos = (state: RootState) => state.memberLinks.linkInfo;
export default memberLinksSlice.reducer;
