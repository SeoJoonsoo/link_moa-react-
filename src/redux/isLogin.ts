import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import login, { getMemberInfo } from '@/api/member/login';
import logout from '@/api/member/logout';
import { localLogin } from '@/pages/LocalLogin';

type IsLogin = {
  status: string;
  isLogin: boolean;
};

const initialState = {
  status: '',
  isLogin: false,
};

const isLoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateisLogin(state, action: PayloadAction<IsLogin>) {
      state.isLogin = action.payload.isLogin;
    },
  },
  extraReducers: (builder) => {
    // dev 로그인시
    builder.addCase(localLogin.fulfilled, (state, action) => {
      state.status = 'success';
      state.isLogin = action.payload.isLogin;
    });
    builder.addCase(localLogin.rejected, (state) => {
      state.status = 'error';
    });
    // prod 로그인 시
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'success';
      state.isLogin = action.payload.isLogin;
    });
    builder.addCase(login.rejected, (state) => {
      state.status = 'error';
    });
    builder.addCase(getMemberInfo.fulfilled, (state, action) => {
      if (action.payload.status !== 'success') {
        state.status = action.payload.status;
        state.isLogin = false;
      }
    });
    builder.addCase(getMemberInfo.rejected, (state) => {
      state.status = 'error';
      state.isLogin = false;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.status = 'success';
      state.isLogin = action.payload.isLogin;
    });
    builder.addCase(logout.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export const { updateisLogin } = isLoginSlice.actions;
export const getIsLogin = (state: RootState) => state.isLogin;
export default isLoginSlice.reducer;
