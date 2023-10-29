import login from '@/api/member/login';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AlertModal = {
  isOpen: boolean;
  closeTime: number;
  status: 'success' | 'fail' | 'error';
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
    openModalForAlert(state, action: PayloadAction<AlertModal>) {
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
  },
});

export const { openModalForAlert, closeModalForAlert } = alertModalSlice.actions;
export default alertModalSlice.reducer;
