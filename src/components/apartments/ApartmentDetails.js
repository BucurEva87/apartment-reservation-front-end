import PropTypes from 'prop-types';
import { TrashIcon, EyeIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteApartment } from '../../redux/apartments/apartmentsThunk';

const ApartmentDetails = ({
  id, name, description, city, price, photo,
}) => {
  const navigate = useNavigate();
  const openReservationFormPage = () => {
    navigate(`/reservations/create/${id}`);
  };

  const { accessToken } = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const handleRemoveApartment = () => {
    dispatch(deleteApartment({ id, accessToken }));
  };

  return (<div className="flex flex-col items-center">
  <div className="bg-white w-full md:w-1/2 rounded-lg shadow-md overflow-hidden">
    <div className="app-bg-primary text-white text-center font-bold text-lg py-2">
      {name}
    </div>
    <div className="p-6">
    <div className="flex items-center justify-center mb-5" >
    <img src={photo} alt="apartment thumbnail" className="h-64 w-92 object-cover rounded-md mr-0" />
    </div>

      <p className="text-sm font-medium text-gray-600">{description}</p>
      <div className="flex flex-row items-center justify-between mt-6">
        <div>
          <p className="text-sm font-medium text-gray-500">Location:</p>
          <p className="text-sm font-semibold text-gray-800">{city}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Price:</p>
          <p className="text-sm font-semibold text-gray-800">${price}</p>
        </div>

      </div>

    </div>

    <div className="flex py-5 flex-row gap-2 justify-center items-start w-full">
    <button onClick={openReservationFormPage} type="button" className="text-dirty-white app-bg-primary rounded w-fit font-light font-roboto px-5 py-2 text-sm">
    <EyeIcon className="h-4 w-4 inline-block mr-1" />
    RESERVE
    </button>
    <button onClick={handleRemoveApartment} type="button" className="text-dirty-white app-bg-danger rounded w-fit font-light font-roboto px-5 py-2 text-sm">
    <TrashIcon className="h-4 w-4 inline-block mr-1" />
    DELETE
    </button>
    </div>
  </div>
</div>);
};

ApartmentDetails.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default ApartmentDetails;