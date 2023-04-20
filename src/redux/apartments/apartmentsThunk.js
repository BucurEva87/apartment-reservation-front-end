import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:3000/api';

const APARTMENT_ADDED = 'apartment-reservation-font-end/apartment/APARTMENT_ADDED';
const APARTMENT_DELETED = 'apartment-reservation-font-end/apartment/APARTMENT_DELETED';
const APARTMENT_FETCHED = 'apartment-reservation-font-end/apartment/APARTMENT_FETCHED';

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
  const res = await axios.post(`${BASE_URL}/apartments`, apartment, options);
  showToastr('The Apartment Added Successfully.');
  thunkAPI.dispatch(fetchApartments());
  return { data: res.data, apartment };
});

/* eslint-disable-next-line max-len */
export const deleteApartment = createAsyncThunk(APARTMENT_DELETED, async (obj) => {
  const options = {
    headers: {
      Authorization: `Bearer ${obj.accessToken}`,
    },
  };
  const res = await axios.delete(`${BASE_URL}/apartments/${obj.id}`, options);
  showToastr('The Apartment Deleted Successfully.');
  const metaData = { apartment_id: obj.id, res_text: res.data };
  return metaData;
});
