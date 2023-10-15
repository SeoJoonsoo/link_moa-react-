import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { getMemberInfo } from './member';

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
    builder.addCase(getMemberInfo.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getMemberInfo.fulfilled, (state, action) => {
      state.status = 'success';
      state.isLogin = action.payload.isLogin;
    });
    builder.addCase(getMemberInfo.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const { updateisLogin } = isLoginSlice.actions;
export const getIsLogin = (state: RootState) => state.isLogin;
export default isLoginSlice.reducer;
