import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import login from '@/api/login';
import logout from '@/api/logout';

type MemberInfo = {
  status: string;
  email: null | string;
  nickname: null | string;
};

// 초기 상태 정의
const initialState: MemberInfo = {
  status: '', // TODO : 동작 확인하려고 추가함
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
    builder.addCase(login.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.email = action.payload.data.memberInfo.email;
      state.nickname = action.payload.data.memberInfo.nickname;
      state.status = 'success';
    });
    builder.addCase(login.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(logout.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.email = null;
      state.nickname = null;
      state.status = 'success';
    });
    builder.addCase(logout.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const { updateMemberInfo, deleteMemberInfo } = memberSlice.actions;
export const getMemberEmail = (state: RootState) => state.member.email;
export const getMembernickName = (state: RootState) => state.member.nickname;
export default memberSlice.reducer;
