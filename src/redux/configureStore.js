import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ReservationSlice from './reservationSlice';

const reducer = combineReducers({
  reseravation: ReservationSlice,
});

const store = configureStore({
  reducer,
});

export default store;
