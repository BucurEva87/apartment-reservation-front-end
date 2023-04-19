import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const ReservationDetails = ({
  id,
  startDate,
  endDate,
  apartmentName,
  apartmentCity,
  apartmentDescription,
  apartmentPrice,
}) => {
  const dispatch = useDispatch();
  return (
  <div className="flex flex-col gap-12 items-center bg-white w-fit m-auto reservation-card  md:flex-row justify-between rounded-sm px-7 py-8 shadow-lg">
  <li className="flex flex-col gap-6 justify-between items-start w-fit ">
    <div className="flex flex-col gap-0">
    <h3 className="text-xl font-boldd font-roboto">
        Apartment: {apartmentName}
      </h3>
      <span className="font-bold text-sm text-black-two opacity-50">
       Description:  {apartmentDescription}
      </span>
    <span className="font-bold text-sm text-black-two opacity-50">
       Location:  {apartmentCity}
      </span>
      <span className="font-bold text-sm text-black-two opacity-50">
       Price:  {apartmentPrice}
      </span>
      <span className="text-sm font-light app-color-primary font-roboto">
       Reserved from: {startDate} to: {endDate}
      </span>
    </div>
  </li>

</div>
  );
};

ReservationDetails.propTypes = {
  id: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  apartmentName: PropTypes.string.isRequired,
  apartmentDescription: PropTypes.string.isRequired,
  apartmentCity: PropTypes.string.isRequired,
  apartmentPrice: PropTypes.number.isRequired,
};

export default ReservationDetails;