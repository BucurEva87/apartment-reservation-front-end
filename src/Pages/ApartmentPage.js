import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import ApartmentsContainer from '../components/apartments/ApartmentsContainer';

const ApartmentPage = () => {
  const { loading, error } = useSelector((state) => state.apartments);
  return (
    <div className='apartment-page'>
      <ToastContainer />
      <ApartmentsContainer />
    </div>

  );
};

export default ApartmentPage;
