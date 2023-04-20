import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createApartment = createAsyncThunk('apartments/create', async (apartmentData) => {
  const response = await fetch('', {
    method: 'POST',
    body: JSON.stringify(apartmentData),
    headers: {
      Authorization: 'Bearer 51iZWdYOjjcKd9opeilJOKWYLbo0egtknPTfonE9Rb4',
    },
  });
  const data = await response.json();
  return data;
});

const apartmentSlice = createSlice({
  name: 'apartments',
  initialState: { status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createApartment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createApartment.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(createApartment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default apartmentSlice.reducer;
