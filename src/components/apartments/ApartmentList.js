import PropTypes from 'prop-types';
import Apartment from './Apartment';
import withLoadingAndError from './withLoadingAndError';

const ApartmentList = ({ apartments }) => (
    <>
    {(apartments.length === 0) && <h3 className="textError">No Apartment Found</h3>}
    {apartments.map((apartment) => (
      <Apartment key={apartment.id} {...apartment} />

    ))}
    </>
);

ApartmentList.propTypes = {
  apartments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  })).isRequired,
};

export default withLoadingAndError(ApartmentList);