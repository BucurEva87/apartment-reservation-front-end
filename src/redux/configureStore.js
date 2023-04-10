import { configureStore } from '@reduxjs/toolkit';
import ReservationReducer from './reservationSlice';

const reducer = {
  reseravation: ReservationReducer,
};

export const store = (preloadedState) => configureStore({
  reducer,
  preloadedState,
});

export default store;