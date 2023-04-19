import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router';
import ReservationDetails from '../components/reservations/ReservationDetails';

const ReservationDetailsPage = () => {
  const { id } = useParams();
  const { loading, error, reservations } = useSelector((state) => state.reservations);
  const reservation = reservations.find((reservation) => reservation.id === Number(id));
  return (
    <div className='reservation-page'>
      <ReservationDetails {...reservation}/>
    </div>

  );
};

export default ReservationDetailsPage;