import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AlertModal = {
  isOpen: boolean;
  alert: React.ReactNode;
};

const initialState: AlertModal = {
  isOpen: false,
  alert: <></>,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<AlertModal>) {
      state.isOpen = true;
      state.alert = action.payload.alert;
    },
    closeModal(state) {
      state.isOpen = false;
      state.alert = <></>;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
