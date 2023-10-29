import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import login, { getMemberInfo } from '@/api/member/login';
import logout from '@/api/member/logout';

type MemberInfo = {
  status: string;
  email: null | string;
  nickname: null | string;
};

// 초기 상태 정의
const initialState: MemberInfo = {
  status: '',
  email: null,
  nickname: null,
};

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    updateMemberInfo(state, action: PayloadAction<MemberInfo>) {
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.status = action.payload.status;
    },
    deleteMemberInfo(state) {
      state.email = null;
      state.nickname = null;
      state.status = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.email = action.payload.data.memberInfo.email;
      state.nickname = action.payload.data.memberInfo.nickname;
      state.status = action.payload.status;
    });
    builder.addCase(login.rejected, (state) => {
      state.status = 'error';
    });
    builder.addCase(getMemberInfo.fulfilled, (state, action) => {
      state.email = action.payload.data.memberInfo.email;
      state.nickname = action.payload.data.memberInfo.nickname;
      state.status = action.payload.status;
    });
    builder.addCase(getMemberInfo.rejected, (state) => {
      state.status = 'error';
      state.email = null;
      state.nickname = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.email = null;
      state.nickname = null;
      state.status = 'success';
    });
    builder.addCase(logout.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export const { updateMemberInfo, deleteMemberInfo } = memberSlice.actions;
export const getMemberEmail = (state: RootState) => state.member.email;
export const getMembernickName = (state: RootState) => state.member.nickname;
export default memberSlice.reducer;
