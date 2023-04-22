import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import clientConfig from '../clientConfig';

const APARTMENT_ADDED = 'apartment-reservation-front-end/apartment/APARTMENT_ADDED';
const APARTMENT_DELETED = 'apartment-reservation-front-end/apartment/APARTMENT_DELETED';
const APARTMENT_FETCHED = 'apartment-reservation-front-end/apartment/APARTMENT_FETCHED';

export const fetchApartments = createAsyncThunk(APARTMENT_FETCHED, async (accessToken) => {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const res = await axios.get(
    `${clientConfig.BASE_URL}:${clientConfig.PORT}${clientConfig.APARTMENTS_PATH}`,
    options,
  );
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

export const createApartment = createAsyncThunk(
  APARTMENT_ADDED,
  async ({ apartment, accessToken }, thunkAPI) => {
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const res = await axios.post(
      `${clientConfig.BASE_URL}:${clientConfig.PORT}${clientConfig.NEW_APARTMENT_PATH}`,
      apartment,
      options,
    );
    showToastr('The Apartment Added Successfully.');
    thunkAPI.dispatch(fetchApartments(accessToken));
    return { data: res.data, apartment };
  },
);

export const deleteApartment = createAsyncThunk(
  APARTMENT_DELETED,
  async ({ id, accessToken }, thunkAPI) => {
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const res = await axios.delete(
      `${clientConfig.BASE_URL}:${clientConfig.PORT}${clientConfig.DESTROY_APARTMENT_PATH}/${id}`,
      options,
    );
    showToastr('The Apartment Deleted Successfully.');
    thunkAPI.dispatch(fetchApartments(accessToken));

    return { data: res.data };
  },
);
