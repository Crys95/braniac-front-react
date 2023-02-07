/* eslint-disable import/no-cycle */
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/es/storage';
import combinedReducers from './modules/combinedReducers';

const blackListKeys = createTransform(
  null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (state: any) => {
    const newState = state;
    return newState;
  },
  {
    whitelist: ['auth'],
  },
);
const persistConfig = {
  key: 'root',
  storage,
  transforms: [blackListKeys],
  whitelist: ['auth'],
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const persistedReducer = persistReducer(persistConfig, combinedReducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: false,
});
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type CustomState = ReturnType<typeof store.getState>;
export { persistor, store };
