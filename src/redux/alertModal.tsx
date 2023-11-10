import getMemberLinks from '@/api/link/getMemberLinks';
import login from '@/api/member/login';
import logout from '@/api/member/logout';
import { localLogin } from '@/pages/LocalLogin';
import { RepsonseStatus } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AlertModal = {
  isOpen: boolean;
  closeTime: number;
  status: RepsonseStatus;
  alert: React.ReactNode;
};

const initialCloseTime = 3000;

const initialState: AlertModal = {
  isOpen: false,
  closeTime: initialCloseTime,
  status: 'success',
  alert: <></>,
};

const alertModalSlice = createSlice({
  name: 'alertModal',
  initialState,
  reducers: {
    openModalForAlert(state, action: PayloadAction<Pick<AlertModal, 'status' | 'alert'> & { closeTime?: number }>) {
      state.isOpen = true;
      state.closeTime = action.payload.closeTime || initialCloseTime;
      state.status = action.payload.status;
      state.alert = action.payload.alert;
    },
    closeModalForAlert(state) {
      state.isOpen = false;
      state.closeTime = initialCloseTime;
      state.status = 'success';
      state.alert = <></>;
    },
  },
  extraReducers: (builder) => {
    // dev 로그인 시
    builder.addCase(localLogin.fulfilled, (state, action) => {
      state.isOpen = true;
      state.status = action.payload.status;
      state.alert =
        action.payload.status === 'success' ? (
          <>
            🚧로컬 로그인 성공!🚧
            <br />
            <span className="bold">{action.payload.data.memberInfo.nickname}</span>님 어서오세요
          </>
        ) : (
          <>
            로그인 중 오류가 발생했습니다
            <br /> 다시 시도해주세요
          </>
        );
    });
    builder.addCase(localLogin.rejected, (state) => {
      state.isOpen = true;
      state.status = 'error';
      state.alert = (
        <>
          오류가 발생했습니다
          <br /> 다시 시도해주세요
        </>
      );
    });
    // prod 로그인 시
    builder.addCase(login.fulfilled, (state, action) => {
      state.isOpen = true;
      state.status = action.payload.status;
      state.alert =
        action.payload.status === 'success' ? (
          <>
            로그인 성공!
            <br />
            <span className="bold">{action.payload.data.memberInfo.nickname}</span>님 반가워요
          </>
        ) : (
          <>
            로그인 중 오류가 발생했습니다
            <br /> 다시 시도해주세요
          </>
        );
    });
    builder.addCase(login.rejected, (state) => {
      state.isOpen = true;
      state.status = 'error';
      state.alert = (
        <>
          오류가 발생했습니다
          <br /> 다시 시도해주세요
        </>
      );
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isOpen = true;
      state.status = action.payload.status;
      state.alert =
        action.payload.status === 'success' ? (
          <>로그아웃되었습니다</>
        ) : (
          <>
            오류가 발생했습니다
            <br /> 다시 시도해주세요
          </>
        );
    });
    builder.addCase(getMemberLinks.fulfilled, (state, action) => {
      if (action.payload.status !== 'success') {
        state.isOpen = true;
        state.status = 'fail';
        state.alert = <>링크 정보를 가져오지 못했습니다</>;
      }
    });
    builder.addCase(getMemberLinks.rejected, (state) => {
      state.isOpen = true;
      state.status = 'error';
      state.alert = <>링크 정보를 가져오지 못했습니다</>;
    });
  },
});

export const { openModalForAlert, closeModalForAlert } = alertModalSlice.actions;
export default alertModalSlice.reducer;
