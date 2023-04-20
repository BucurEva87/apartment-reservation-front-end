import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router';
import ReservationForm from '../components/reservations/ReservationForm';

const ReservationCreatePage = () => {
  const { id } = useParams();
  return (
    <div className='reservation-page'>
        <ToastContainer />
      <ReservationForm apartmentId={id}/>
    </div>

  );
};

export default ReservationCreatePage;