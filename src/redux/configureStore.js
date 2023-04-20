import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reservations from './reservations/reservationsSlice';
import apartments from './apartments/apartmentSlice';

const rootReducer = combineReducers({ reservations, apartments });

const store = configureStore({ reducer: rootReducer });

export default store;