import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import login from '@/api/login';
import logout from '@/api/logout';

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
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'success';
      state.isLogin = action.payload.isLogin;
    });
    builder.addCase(login.rejected, (state) => {
      state.status = 'error';
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
