import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../clientConfig';

export const LOGIN = 'apartment-reservation-font-end/authentication/LOGIN';

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
