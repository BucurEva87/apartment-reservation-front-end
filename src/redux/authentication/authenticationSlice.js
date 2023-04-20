import { createSlice } from '@reduxjs/toolkit';
import login from './authenticationThunk';

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
      console.log(state.user);
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

        state.user = {
          tokenType: action.payload.token_type,
          accessToken: action.payload.access_token,
          refreshToken: action.payload.refresh_token,
          expiresIn: action.payload.expires_in, // 7200
          createdAt: action.payload.created_at,
        };

        localStorage.setItem('accessToken', JSON.stringify({
          data: action.payload.access_token,
          expirationTime: new Date().getTime() + (action.payload.expires_in * 1000),
        }));
      })
      .addCase(login.rejected, (state, action) => {
        // Dump all key/value pairs from payload to state
        // Object.entries(action.payload).forEach(([key, value]) => { state[key] = value; });
        // Update flag
        state.loading = false;
        state.user = null;
        state.success = false;
      });
  },
});

export const { loadToken, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
