import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../components/menu/slices/menuSlice';

export const store = configureStore({
  reducer: {
    counter: menuReducer,
  },
});

