import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authentication from './authentication/authenticationSlice';
import reservations from './reservations/reservationsSlice';

const rootReducer = combineReducers({ authentication, reservations });

const store = configureStore({ reducer: rootReducer });

export default store;