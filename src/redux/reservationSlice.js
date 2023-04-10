import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reservationData from './reservationApi'; 
// to come from the api

const initialState = {
  status: null,
  reservations: [],
  errors: [],
};

export const getReservationAsync = createAsyncThunk(
  'Reservation/get',
  async () => {
    const { data } = await reservationData.getAll();
    return data;
  },
);

export const createReservationAsync = createAsyncThunk(
  'Reservation/create',
  async (data) => {
    await reservationData.create(data);
  },
);

export const cancelReservationAsync = createAsyncThunk(
  'Reservation/cancel',
  async (id) => {
    await reservationData.cancel(id);
  },
);

export const ReservationSlice = createSlice({
  name: 'myReservations',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getReservationAsync.pending, (state) => {
        state.status = 'loading';
        state.errors = [];
      })
      .addCase(getReservationAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.errors = [];
        state.Reservations = action.payload;
      })
      .addCase(getReservationAsync.rejected, (state, action) => {
        state.status = 'error';
        state.errors.push(action.payload.error);
      });
  },
});

export default ReservationSlice.reducer;