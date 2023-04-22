import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../clientConfig';

const RESERVATION_ADDED = 'apartment-reservation-front-end/reservation/RESERVATION_ADDED';
const RESERVATION_DELETED = 'apartment-reservation-front-end/reservation/RESERVATION_DELETED';
const RESERVATION_FETCHED = 'apartment-reservation-front-end/reservation/RESERVATION_FETCHED';

export const fetchReservations = createAsyncThunk(
  RESERVATION_FETCHED,
  async (accessToken) => {
    const path = `${client.BASE_URL}:${client.PORT}${client.RESERVATIONS_PATH}`;
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const res = await axios.get(path, options);
    const reservations = res.data.reservations.map((reservation) => ({
      id: reservation.id,
      startDate: reservation.start_date,
      endDate: reservation.end_date,
      apartmentName: reservation.apartment.name,
      apartmentDescription: reservation.apartment.description,
      apartmentCity: reservation.apartment.city,
      apartmentPrice: reservation.apartment.price,
      apartmentPhoto: reservation.apartment.photo,
    }));
    return reservations;
  },
);

const showToastr = (msg) => {
  toast(msg);
};

export const createReservation = createAsyncThunk(
  RESERVATION_ADDED,
  async ({ reservation, accessToken }, thunkAPI) => {
    const path = `${client.BASE_URL}:${client.PORT}${client.NEW_RESERVATION_PATH}`;
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const res = await axios.post(path, reservation, options);
    showToastr('The Reservation Added Successfully.');
    thunkAPI.dispatch(fetchReservations(accessToken));
    return { data: res.data, reservation };
  },
);

export const deleteReservation = createAsyncThunk(
  RESERVATION_DELETED,
  async ({ id, accessToken }, thunkAPI) => {
    console.log(`Deleting reservation ${id}`)
    const path = `${client.BASE_URL}:${client.PORT}${client.DESTROY_RESERVATION_PATH}/${id}`;
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const res = await axios.delete(path, options);
    showToastr('The Reservation Deleted Successfully.');
    thunkAPI.dispatch(fetchReservations(accessToken));
    return { reservation_id: reservation.id, res_text: res.data };
  },
);
