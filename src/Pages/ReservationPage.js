import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import ReservationsContainer from '../components/reservations/ReservationsContainer';

const ReservationPage = () => {
  const { loading, error } = useSelector((state) => state.reservations);
  return (
    <div className='book-page'>
      <ToastContainer />
      <ReservationsContainer />
    </div>

  );
};

export default ReservationPage;