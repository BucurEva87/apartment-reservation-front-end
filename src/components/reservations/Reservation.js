import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const Reservation = ({
  id, startDate, endDate, apartmentName,
}) => {
  const dispatch = useDispatch();
  return (
  <div className="flex flex-col gap-12 items-center bg-white w-fit m-auto reservation-card  md:flex-row justify-between rounded-sm px-7 py-8 shadow-lg">
  <li className="flex flex-col gap-6 justify-between items-start w-72 ">
    <div className="flex flex-col gap-0">
      <h3 className="text-xl font-bold font-roboto">
        Apartment Name:{apartmentName}
      </h3>
      <span className="text-sm font-light app-color-primary font-roboto">
       Reserved from:{startDate} to:{endDate}
      </span>
    </div>
  </li>

  <div className="flex flex-col gap-2 justify-center items-start w-64 ">
      <button type="button" className="text-dirty-white app-bg-primary rounded w-fit font-light font-roboto px-5 py-2 text-sm">VIEW DETAILS</button>
    </div>

</div>
  );
};

Reservation.propTypes = {
  id: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  apartmentName: PropTypes.string.isRequired,
  apartmentDescription: PropTypes.string.isRequired,
  apartmentCity: PropTypes.string.isRequired,
  apartmentPrice: PropTypes.number.isRequired,
};

export default Reservation;