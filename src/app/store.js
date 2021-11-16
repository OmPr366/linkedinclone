import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userContext';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
