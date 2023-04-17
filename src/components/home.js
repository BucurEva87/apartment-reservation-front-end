import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getApartments } from '../redux/apartments/apartmentSlice';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const { apartments, loading } = useSelector((state) => state.apartments);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    dispatch(getApartments());
  }, [dispatch]);

  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextClick = () => {
    if (pageNumber < Math.ceil(apartments.length / pageSize)) {
      setPageNumber(pageNumber + 1);
    }
  };

  if (loading) {
    return <p>Loading apartments...</p>;
  }

  return (
    <div className="main_page">
      <h1>All Apartments</h1>
      <h3>Please Select an apartment</h3>
      <div>
        <button type="button" onClick={handlePrevClick} disabled={pageNumber <= 1}>Prev</button>
        {apartments.slice((pageNumber - 1) * pageSize, pageNumber * pageSize).map((apartment) => (
          <div key={apartment.id}>
            <Link to={`/${apartment.id}`}>
              <h2>{apartment.name}</h2>
            </Link>
            <p>{apartment.image}</p>
            <p>
              Price:
              {apartment.current_price}
            </p>
          </div>
        ))}
        <button type="button" onClick={handleNextClick} disabled={pageNumber >= Math.ceil(apartments.length / pageSize)}>Next</button>
      </div>
    </div>
  );
};

export default Home;
