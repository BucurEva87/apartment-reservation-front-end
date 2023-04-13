import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApartments } from './redux/apartments/apartmentSlice';

const App = () => {
  const { apartments } = useSelector((state) => state.apartments);
  
console.log(apartments)
  const dispatch = useDispatch;
  useEffect(() => {
    dispatch(getApartments());
  }, [dispatch]);
  return (
    <div>
      {/* {apartments.map((item) => (
        <h1 key={item.city}>{item.name}</h1>
      ))} */}
    </div>
  );
};
export default App;
