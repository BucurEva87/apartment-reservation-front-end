import PropTypes from 'prop-types';
import Reservation from './Reservation';
import withLoadingAndError from './withLoadingAndError';

const ReservationList = ({ reservations }) => (
    <>
    {(reservations.length === 0) && <h3 className="textError">Please Add Reservation</h3>}
    {reservations.map((reservation) => (
      <Reservation key={reservation.id} {...reservation} />

    ))}
    </>
);

ReservationList.propTypes = {
  reservations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    apartmentName: PropTypes.string.isRequired,
    apartmentDescription: PropTypes.string.isRequired,
    apartmentCity: PropTypes.string.isRequired,
    apartmentPrice: PropTypes.number.isRequired,
  })).isRequired,
};

export default withLoadingAndError(ReservationList);