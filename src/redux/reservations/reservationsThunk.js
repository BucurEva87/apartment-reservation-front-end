import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:3000/api';

const RESERVATION_ADDED = 'apartment-reservation-font-end/reservation/RESERVATION_ADDED';
const RESERVATION_FETCHED = 'apartment-reservation-font-end/reservation/RESERVATION_FETCHED';

export const fetchReservations = createAsyncThunk(RESERVATION_FETCHED, async () => {
  const options = {
    headers: {
      Authorization: 'Bearer J_jJ0fSwnF7elFPkT8ec65xeP_AgyzE-hp3A1fXcEjk',
    },
  };
  const res = await axios.get(`${BASE_URL}/reservations`, options);
  const reservations = res.data.reservations.map((reservation) => ({
    id: reservation.id,
    startDate: reservation.start_date,
    endDate: reservation.end_date,
    apartmentName: reservation.apartment.name,
    apartmentDescription: reservation.apartment.description,
    apartmentCity: reservation.apartment.city,
    apartmentPrice: reservation.apartment.price,
  }));
  return reservations;
});

const showToastr = (msg) => {
  toast(msg);
};

/* eslint-disable-next-line max-len */
export const createReservation = createAsyncThunk(RESERVATION_ADDED, async (reservation, thunkAPI) => {
  const res = await axios.post(`${BASE_URL}/reservations`, reservation);
  showToastr('The Reservation Added Successfully.');
  thunkAPI.dispatch(fetchReservations());
  return { data: res.data, reservation };
});
