import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:3000/api';

const RESERVATION_ADDED = 'apartment-reservation-font-end/reservation/RESERVATION_ADDED';
const RESERVATION_DELETED = 'apartment-reservation-font-end/reservation/RESERVATION_DELETED';
const RESERVATION_FETCHED = 'apartment-reservation-font-end/reservation/RESERVATION_FETCHED';

export const fetchReservations = createAsyncThunk(RESERVATION_FETCHED, async (accessToken) => {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
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
  const options = {
    headers: {
      Authorization: `Bearer ${reservation.accessToken}`,
    },
  };
  const res = await axios.post(`${BASE_URL}/reservations`, reservation, options);
  showToastr('The Reservation Added Successfully.');
  thunkAPI.dispatch(fetchReservations());
  return { data: res.data, reservation };
});

/* eslint-disable-next-line max-len */
export const deleteReservation = createAsyncThunk(RESERVATION_DELETED, async (obj) => {
  const options = {
    headers: {
      Authorization: `Bearer ${obj.accessToken}`,
    },
  };
  const res = await axios.delete(`${BASE_URL}/reservations/${obj.id}`, options);
  showToastr('The Reservation Deleted Successfully.');
  const metaData = { reservation_id: obj.id, res_text: res.data };
  return metaData;
});
