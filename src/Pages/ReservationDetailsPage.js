import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import ReservationDetails from '../components/reservations/ReservationDetails';

const ReservationDetailsPage = () => {
  const { loading, error } = useSelector((state) => state.reservations);
  return (
    <div className='reservation-page'>
      <ReservationDetails/>
    </div>

  );
};

export default ReservationDetailsPage;