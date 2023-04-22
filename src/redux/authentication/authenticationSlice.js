import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './authenticationThunk';

const initialState = {
  user: null,
  loading: false,
  success: null,
  error: null,
  errorDescription: null,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    loadToken(state, action) {
      state.user = {
        accessToken: action.payload.token,
      };
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('accessToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.success = null;
        state.error = null;
        state.errorDescription = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        if (action.payload.error) {
          state.error = action.payload.error;
          state.errorDescription = action.payload.error_description;
          return;
        }

        const {
          id,
          name,
          email,
          role,
          access_token,
          token_type,
          expires_in,
          refresh_token,
          created_at,
        } = action.payload;

        state.user = {
          id,
          name,
          email,
          role,
          accessToken: access_token,
          tokenType: token_type,
          expiresIn: expires_in,
          refreshToken: refresh_token,
          createdAt: created_at,
        };

        localStorage.setItem('accessToken', JSON.stringify({
          data: action.payload.access_token,
          expirationTime: new Date().getTime() + (action.payload.expires_in * 1000),
        }));
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.success = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        const {
          id,
          name,
          email,
          role,
          access_token,
          token_type,
          expires_in,
          refresh_token,
          created_at,
        } = action.payload;

        state.user = {
          id,
          name,
          email,
          role,
          accessToken: access_token,
          tokenType: token_type,
          expiresIn: expires_in,
          refreshToken: refresh_token,
          createdAt: created_at,
        };
      });
  },
});

export const { loadToken, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
