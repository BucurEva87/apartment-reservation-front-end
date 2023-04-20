import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:3000/api';

export const getApartments = createAsyncThunk('apartments/getApartments', async () => {
  const options = {
    headers: {
      Authorization: 'Bearer ZO_BCaCJB-TBWK3M1Id1EmHjIpSHbFPaWMjhT2IBZhw',
    },
  };
  const response = await fetch(`${BASE_URL}/apartments`, options);
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
