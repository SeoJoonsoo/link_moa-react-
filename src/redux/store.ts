import { configureStore } from '@reduxjs/toolkit';
import memberReducer from './member';
import isLoginReducer from './isLogin';

const store = configureStore({
  reducer: {
    member: memberReducer,
    isLogin: isLoginReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
