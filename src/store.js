
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/counterslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
