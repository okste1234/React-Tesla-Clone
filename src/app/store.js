import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/carFolder/carSlice"

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
