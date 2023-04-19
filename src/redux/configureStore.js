import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reservations from './reservations/reservationsSlice';

const rootReducer = combineReducers({ reservations });

const store = configureStore({ reducer: rootReducer });

export default store;