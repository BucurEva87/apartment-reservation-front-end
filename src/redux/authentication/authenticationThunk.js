import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../clientConfig';

const LOGIN = 'apartment-reservation-font-end/authentication/LOGIN';
// const LOGOUT = 'apartment-reservation-font-end/authentication/LOGOUT';

export const login = createAsyncThunk(LOGIN, async ({ email, password }) => {
  const path = `${client.BASE_URL}:${client.PORT}${client.USER_AUTH_PATH}`;
  const options = {
    grant_type: client.grantType,
    email,
    password,
    client_id: client.clientId,
    client_secret: client.clientSecret,
  };
  const response = await axios.post(path, options);

  return response.data;
});

// export const logout = createAsyncThunk(LOGOUT, async (reservation, thunkAPI) => {
//   const res = await axios.post(`${BASE_URL}/reservations`, reservation);
//   showToastr('The Reservation Added Successfully.');
//   thunkAPI.dispatch(fetchReservations());
//   return { data: res.data, reservation };
// });