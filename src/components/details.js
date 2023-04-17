import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApartmentById } from '../redux/apartments/apartmentSlice';

const ApartmentDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { apartment, loading } = useSelector((state) => state.apartments);
  const { id } = match.params;

  useEffect(() => {
    dispatch(getApartmentById(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Loading apartment details...</p>;
  }

  if (!apartment) {
    return <p>Apartment not found.</p>;
  }

  return (
    <div className="apartment_details">
      <h1>{apartment.name}</h1>
      <img src={apartment.image} alt={apartment.name} />
      <p>
        Price:
        {apartment.current_price}
      </p>
      <p>Description: {apartment.description}</p>
    </div>
  );
};

export default ApartmentDetails;
