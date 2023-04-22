import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createApartment } from '../../redux/apartments/apartmentsThunk';
import { resetDeletedError } from '../../redux/apartments/apartmentsSlice';

const ApartmentForm = ({ apartmentId }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    description: '',
    photo: '',
    price: 0,
  });
  const { accessToken } = useSelector((state) => state.authentication.user);

  const dispatch = useDispatch();
  // const { deletedError } = useSelector((state) => state.apartments);

  // useEffect(() => {
  //   if (deletedError) {
  //     toast.error(deletedError);
  //     dispatch(resetDeletedError());
  //   }
  // }, [deletedError]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // const resetForm = () => {
  //   setStartDate('');
  //   setEndDate('');
  // };
  // const isValid = (startDate, endDate) => {
  //   let validStatus = true;
  //   if (startDate.length === 0) {
  //     setErrorStartDate('Start Date field is required');
  //     validStatus = false;
  //   }
  //   if (endDate.length === 0) {
  //     setErrorEndDate('End Date field is required');
  //     validStatus = false;
  //   }

  //   return validStatus;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const mStartDate = startDate.trim();
    // const mEndDate = endDate.trim();

    // if (!isValid(mStartDate, mEndDate)) {
    //   return;
    // }

    dispatch(createApartment({ apartment: formData, accessToken }));
    // resetForm();
  };

  return (
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Photo:
        <input
          type="text"
          name="photo"
          value={formData.photo}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          step={0.01}
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <button type="submit">Add a new apartment</button>
    </form>
  );
};

export default ApartmentForm;
