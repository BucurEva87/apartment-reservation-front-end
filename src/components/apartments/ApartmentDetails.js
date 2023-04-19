import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ApartmentDetails = () => {
    const { id } = useParams();
    const { apartments } = useSelector((state) => state.apartments);
    const apartment = apartments.find((apt) => apt.id === parseInt(id));
    
    return (
      <div>
        <h2>{apartment.name}</h2>
        <img src={apartment.image} alt="Apartment Image" />
        <p>{apartment.description}</p>
        <p>Location: {apartment.city}</p>
        <p>Price: {apartment.price}</p>
      </div>
    );
  };
  
  export default ApartmentDetails;
  