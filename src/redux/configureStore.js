// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// // import ReservationSlice from './reservationSlice';
// import apartmentSlice from './apartments/apartmentSlice';

// const reducer = combineReducers({
//   apartment: apartmentSlice,
// });

// const store = configureStore({
//   reducer,
// });
import { configureStore } from '@reduxjs/toolkit';
import apartmentsReducer from './apartments/apartmentSlice';

export default configureStore({
  reducer: {
    apartments: apartmentsReducer,
  },
});

// export default store;
