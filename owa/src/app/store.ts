import { configureStore, ThunkAction, Action, ConfigureStoreOptions } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { api } from '../core/api/api'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
  })

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
