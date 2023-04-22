import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../clientConfig';

const LOGIN = 'apartment-reservation-front-end/authentication/LOGIN';
// const LOGOUT = 'apartment-reservation-front-end/authentication/LOGOUT';
const REGISTER = 'apartment-reservation-front-end/authentication/REGISTER';

export const login = createAsyncThunk(
  LOGIN,
  async ({ email, password }) => {
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
  }
);

export const register = createAsyncThunk(
  REGISTER,
  async (user, thunkAPI) => {
    let result = {}

    const path = `${client.BASE_URL}:${client.PORT}${client.USER_REGISTRATION_PATH}`;
    const options = {
      user,
      client_id: client.clientId,
    };

    try {
      const response = await axios.post(path, options);

      localStorage.setItem('accessToken', JSON.stringify({
        data: response.data.user.access_token,
        expirationTime: new Date().getTime() + (response.data.user.expires_in * 1000),
      }));
      console.log('Everything was fine')
      result = response.data
    } catch (error) {
      console.log('An error happened')
      console.log(error.response.data)
      result = error.response.data
    }

    return result
  }
);
