import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createReservation } from '../../redux/reservations/reservationsThunk';
import { resetDeletedError } from '../../redux/reservations/reservationsSlice';

const ReservationForm = ({ apartmentId }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errorStartDate, setErrorStartDate] = useState(null);
  const [errorEndDate, setErrorEndDate] = useState(null);
  const { accessToken } = useSelector((state) => state.authentication.user);

  const dispatch = useDispatch();
  const { deletedError } = useSelector((state) => state.reservations);

  useEffect(() => {
    if (deletedError) {
      toast.error(deletedError);
      dispatch(resetDeletedError());
    }
  }, [deletedError]);

  const resetForm = () => {
    setStartDate('');
    setEndDate('');
  };
  const isValid = (startDate, endDate) => {
    let validStatus = true;
    if (startDate.length === 0) {
      setErrorStartDate('Start Date field is required');
      validStatus = false;
    }
    if (endDate.length === 0) {
      setErrorEndDate('End Date field is required');
      validStatus = false;
    }

    return validStatus;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mStartDate = startDate.trim();
    const mEndDate = endDate.trim();

    if (!isValid(mStartDate, mEndDate)) {
      return;
    }

    dispatch(createReservation({
      apartment_id: apartmentId,
      start_date: mStartDate,
      end_date: mEndDate,
      accessToken,
    }));
    resetForm();
  };

  return (

    <div className="flex justify-center">
    <div className="w-full sm:w-3/4 lg:w-1/2 bg-white shadow-md rounded-md p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <h2 className="text-xl  text-warm-grey text-center"><span className='font-bold'>{'House in the country side'}</span> in <span className='font-bold'>{'Miami'}</span></h2>
        <p className="text-lg font-medium text-warm-grey text-center">${'100'} USD / night</p>
        <div className="flex flex-row gap-6">
          <div className="w-full sm:w-1/2 flex flex-col">
            <label htmlFor="startDate" className="block mb-2 font-medium text-gray-700">Select Start Date</label>
            <input
              type="date"
              name="startDate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Start Date"
              required
            />
            {errorStartDate && <span className="text-red-700">*{errorStartDate}*</span>}
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <label htmlFor="endDate" className="block mb-2 font-medium text-gray-700">Select End Date</label>
            <input
              type="date"
              name="endDate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="End Date"
              required
            />
            {errorEndDate && <span className="text-red-700">*{errorEndDate}*</span>}
          </div>
        </div>
        <button type="submit" className="w-72 py-2 mx-auto mb-6 font-medium text-white app-bg-primary rounded-md hover:bg-primary-600 focus:outline-none focus:bg-primary-600">
          Reserve Now
        </button>
      </form>
    </div>
  </div>

  );
};

export default ReservationForm;