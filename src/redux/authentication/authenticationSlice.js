import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './authenticationThunk';

const initialState = {
  user: null,
  loading: false,
  success: null,
  error: null,
  errorDescription: null,
  rejection: null,
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

        state.user = {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          role: action.payload.role,
          accessToken: action.payload.access_token,
          tokenType: action.payload.token_type,
          expiresIn: action.payload.expires_in,
          refreshToken: action.payload.refresh_token,
          createdAt: action.payload.created_at,
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
        if (action.payload.error) {
          state.error = action.payload.error;
        } else {
          state.user = {
            id: action.payload.user.id,
            name: action.payload.user.name,
            email: action.payload.user.email,
            role: action.payload.user.role,
            accessToken: action.payload.user.access_token,
            tokenType: action.payload.user.token_type,
            expiresIn: action.payload.user.expires_in,
            refreshToken: action.payload.user.refresh_token,
            createdAt: action.payload.user.created_at,
          };
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.rejection = action.payload.error;
      });
  },
});

export const { loadToken, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
