import { configureStore } from '@reduxjs/toolkit';
import memberReducer from './member';
import isLoginReducer from './isLogin';
import alertModalReducer from './alertModal';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['isLogin'],
};

const isLogin = persistReducer(persistConfig, isLoginReducer);

const store = configureStore({
  reducer: {
    isLogin,
    member: memberReducer,
    alertModal: alertModalReducer,
  },
  // devTools: import.meta.env.DEV, // process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
