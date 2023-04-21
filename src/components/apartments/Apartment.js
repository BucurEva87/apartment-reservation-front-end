import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TrashIcon, EyeIcon } from '@heroicons/react/solid';
import { deleteApartment } from '../../redux/apartments/apartmentsThunk';

const Apartment = ({
  id, name, description, city, price, photo,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showApartmentDetails = () => {
    navigate(`/${id}`);
  };
  const { accessToken } = useSelector((state) => state.authentication.user);

  return (
  <div className="flex flex-col gap-12 items-center bg-white w-fit m-auto reservation-card  md:flex-row justify-between rounded-sm px-7 py-8 shadow-lg">
  <li className="flex flex-col gap-6 justify-between items-start w-92 ">
  <div className="flex items-center">
    <img src={photo} alt="apartment thumbnail" className="h-64 w-64 object-cover rounded-md mr-6" />
  </div>
    <div className="flex flex-col gap-0">
    <span className="font-bold text-sm text-black-two opacity-50">
       Located in {city}
      </span>
      <span className="font-bold text-sm text-black-two opacity-50">
       Located in ${price}
      </span>
      <h3 className="text-xl font-boldd font-roboto">
        Apartment: {name}
      </h3>
    </div>
  </li>

  <div className="flex flex-row gap-2 justify-center items-start w-64">
    <button onClick={showApartmentDetails} type="button" className="text-dirty-white app-bg-primary rounded w-fit font-light font-roboto px-5 py-2 text-sm">
    <EyeIcon className="h-4 w-4 inline-block mr-1" />
    VIEW
    </button>
  </div>

</div>
  );
};

Apartment.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Apartment;
