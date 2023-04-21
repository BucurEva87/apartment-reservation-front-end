import React from 'react';

const ApartmentDetails = ({
  name, photo, description, city, price,
}) => (
      <div>
        <h2>{name}</h2>
        <img src={photo} alt="Apartment Image" />
        <p>{description}</p>
        <p>Location: {city}</p>
        <p>Price: {price}</p>
      </div>
);

export default ApartmentDetails;
