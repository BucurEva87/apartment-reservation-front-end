import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router';
import ApartmentForm from '../components/apartments/ApartmentForm';

const ApartmentCreatePage = () => {
  const { id } = useParams();
  return (
    <div className='apartment-page'>
        <ToastContainer />
      <ApartmentForm apartmentId={id}/>
    </div>

  );
};

export default ApartmentCreatePage;
