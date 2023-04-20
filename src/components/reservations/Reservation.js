import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TrashIcon, EyeIcon } from '@heroicons/react/solid';
import { deleteReservation } from '../../redux/reservations/reservationsThunk';

const Reservation = ({
  id, startDate, endDate, apartmentName, apartmentCity, apartmentPhoto,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showReservationDetails = () => {
    navigate(`/reservations/${id}`);
  };
  const accessToken = 'ZO_BCaCJB-TBWK3M1Id1EmHjIpSHbFPaWMjhT2IBZhw';
  const handleRemoveReservation = () => {
    dispatch(deleteReservation({ id, accessToken }));
  };

  return (
  <div className="flex flex-col gap-12 items-center bg-white w-fit m-auto reservation-card  md:flex-row justify-between rounded-sm px-7 py-8 shadow-lg">
  <li className="flex flex-col gap-6 justify-between items-start w-92 ">
  <div className="flex items-center">
    <img src={apartmentPhoto} alt="apartment thumbnail" className="h-64 w-64 object-cover rounded-md mr-6" />
  </div>
    <div className="flex flex-col gap-0">
    <span className="font-bold text-sm text-black-two opacity-50">
       Located in {apartmentCity}
      </span>
      <h3 className="text-xl font-boldd font-roboto">
        Apartment: {apartmentName}
      </h3>
      <span className="text-sm font-light app-color-primary font-roboto">
       Reserved from: {startDate} to: {endDate}
      </span>
    </div>
  </li>

  <div className="flex flex-row gap-2 justify-center items-start w-64">
    <button onClick={showReservationDetails} type="button" className="text-dirty-white app-bg-primary rounded w-fit font-light font-roboto px-5 py-2 text-sm">
    <EyeIcon className="h-4 w-4 inline-block mr-1" />
    VIEW
    </button>
    <button onClick={handleRemoveReservation} type="button" className="text-dirty-white app-bg-danger rounded w-fit font-light font-roboto px-5 py-2 text-sm">
    <TrashIcon className="h-4 w-4 inline-block mr-1" />
    DELETE
    </button>
  </div>

</div>
  );
};

Reservation.propTypes = {
  id: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  apartmentName: PropTypes.string.isRequired,
  apartmentDescription: PropTypes.string.isRequired,
  apartmentCity: PropTypes.string.isRequired,
  apartmentPrice: PropTypes.number.isRequired,
};

export default Reservation;