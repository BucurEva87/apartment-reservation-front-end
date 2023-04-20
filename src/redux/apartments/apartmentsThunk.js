import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:3000/api';

const RESERVATION_ADDED = 'apartment-reservation-font-end/apartment/RESERVATION_ADDED';
const RESERVATION_DELETED = 'apartment-reservation-font-end/apartment/RESERVATION_DELETED';
const RESERVATION_FETCHED = 'apartment-reservation-font-end/apartment/RESERVATION_FETCHED';

export const fetchApartments = createAsyncThunk(APARTMENT_FETCHED, async (accessToken) => {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const res = await axios.get(`${BASE_URL}/apartments`, options);
  const apartments = res.data.apartments.map((apartment) => ({
    id: apartment.id,
    name: apartment.name,
    description: apartment.description,
    city: apartment.city,
    price: apartment.price,
    photo: apartment.photo,
  }));
  return apartments;
});

const showToastr = (msg) => {
  toast(msg);
};

/* eslint-disable-next-line max-len */
export const createApartment = createAsyncThunk(APARTMENT_ADDED, async (apartment, thunkAPI) => {
  const options = {
    headers: {
      Authorization: `Bearer ${apartment.accessToken}`,
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
