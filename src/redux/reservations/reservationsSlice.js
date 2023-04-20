import { createSlice } from '@reduxjs/toolkit';
import { fetchReservations, createReservation, deleteReservation } from './reservationsThunk';

const initialState = {
  reservations: [],
  loading: true,
  error: null,
  deletedError: null,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    resetDeletedError(state) {
      state.deletedError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.error = null;
      state.reservations = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchReservations.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(createReservation.fulfilled, (state, action) => {
      const { reservation } = action.payload;
      state.reservations = [...state.reservations, {
        id: reservation.item_id,
        title: reservation.title,
        author: reservation.author,
      }];
    });

    builder.addCase(deleteReservation.rejected, (state, action) => {
      state.deletedError = action.error.message;
    });

    builder.addCase(deleteReservation.fulfilled, (state, action) => {
      state.reservations = state.reservations
        .filter((reservation) => reservation.id !== action.payload.reservation_id);
    });
  },
});

export const {
  addReservation, removeReservation, resetDeletedError,
} = reservationsSlice.actions;
export default reservationsSlice.reducer;