import { createSlice } from '@reduxjs/toolkit';
import { fetchApartments, createApartment, deleteApartment } from './apartmentsThunk';

const initialState = {
  apartments: [],
  loading: true,
  error: null,
  deletedError: null,
};

const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {
    resetDeletedError(state) {
      state.deletedError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApartments.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchApartments.fulfilled, (state, action) => {
      state.error = null;
      state.reservations = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchApartments.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(createApartment.fulfilled, (state, action) => {
      const { apartment } = action.payload;
      state.apartments = [...state.apartments, {
        id: apartment.id,
        name: apartment.name,
        description: apartment.description,
        photo: apartment.photo,
        city: apartment.city,
        price: apartment.price,
      }];
    });

    builder.addCase(deleteApartment.rejected, (state, action) => {
      state.deletedError = action.error.message;
    });

    builder.addCase(deleteApartment.fulfilled, (state, action) => {
      state.apartments = state.apartments
        .filter((apartment) => apartment.id !== action.payload.apartment_id);
    });
  },
});

export const {
  addApartment, removeApartment, resetDeletedError,
} = apartmentsSlice.actions;
export default apartmentsSlice.reducer;