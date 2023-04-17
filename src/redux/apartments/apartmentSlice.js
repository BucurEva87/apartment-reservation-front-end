import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getApartments = createAsyncThunk('apartments/getApartments', async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false');
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
