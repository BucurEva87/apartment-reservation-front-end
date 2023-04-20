import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../clientConfig';
import { loginAfterRegistration } from './authenticationSlice';

const LOGIN = 'apartment-reservation-front-end/authentication/LOGIN';
// const LOGOUT = 'apartment-reservation-front-end/authentication/LOGOUT';
const REGISTER = 'apartment-reservation-front-end/authentication/REGISTER';

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

export const register = createAsyncThunk(REGISTER, async ({
  name, email, password, role,
}) => {
  const path = `${client.BASE_URL}:${client.PORT}${client.USER_REGISTRATION_PATH}`;
  const options = {
    name,
    email,
    password,
    role,
    client_id: client.clientId,
  };

  const response = await axios.post(path, options);

  localStorage.setItem('accessToken', JSON.stringify({
    data: response.data.user.access_token,
    expirationTime: new Date().getTime() + (response.data.user.expires_in * 1000),
  }));
});
