import login from '@/api/login';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AlertModal = {
  isOpen: boolean;
  status: 'success' | 'fail' | 'error';
  alert: React.ReactNode;
};

const initialState: AlertModal = {
  isOpen: false,
  status: 'success',
  alert: <></>,
};

const modalSlice = createSlice({
  name: 'alertModal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<AlertModal>) {
      state.isOpen = true;
      state.status = action.payload.status;
      state.alert = action.payload.alert;
    },
    closeModal(state) {
      state.isOpen = false;
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

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
