import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getApartments = createAsyncThunk('apartments/getApartments', async () => {
  const response = await fetch('https://localhost:3000/api/apartments');
  const data = await response.json();
  console.log(data);
  return data;
});

const apartmentSlice = createSlice({
  name: 'apartments',
  initialState: {
    apartments: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApartments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getApartments.fulfilled, (state, action) => {
        state.loading = false;
        state.apartments = [...action.payload];
      })
      .addCase(getApartments.rejected, (state, action) => {
        state.loading = false;
        state.apartments = [...action.payload];
      });
  },
});

export default apartmentSlice.reducer;
