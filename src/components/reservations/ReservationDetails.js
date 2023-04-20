import PropTypes from 'prop-types';

const ReservationDetails = ({
  startDate,
  endDate,
  apartmentName,
  apartmentCity,
  apartmentDescription,
  apartmentPrice,
  apartmentPhoto,
}) => (
<div className="flex flex-col items-center">
  <div className="bg-white w-full md:w-1/2 rounded-lg shadow-md overflow-hidden">
    <div className="app-bg-primary text-white text-center font-bold text-lg py-2">
      {apartmentName}
    </div>
    <div className="p-6">
    <div className="flex items-center justify-center">
    <img src={apartmentPhoto} alt="apartment thumbnail" className="h-64 w-92 object-cover rounded-md mr-0" />
    </div>

      <p className="text-sm font-medium text-gray-600">{apartmentDescription}</p>
      <div className="flex flex-row items-center justify-between mt-6">
        <div>
          <p className="text-sm font-medium text-gray-500">Location:</p>
          <p className="text-sm font-semibold text-gray-800">{apartmentCity}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Price:</p>
          <p className="text-sm font-semibold text-gray-800">${apartmentPrice}</p>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-sm font-medium text-gray-500">Reserved from:</p>
        <p className="text-sm font-semibold app-color-primary">{startDate} to {endDate}</p>
      </div>
    </div>
  </div>
</div>

);

ReservationDetails.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  apartmentName: PropTypes.string.isRequired,
  apartmentDescription: PropTypes.string.isRequired,
  apartmentCity: PropTypes.string.isRequired,
  apartmentPrice: PropTypes.number.isRequired,
};

export default ReservationDetails;