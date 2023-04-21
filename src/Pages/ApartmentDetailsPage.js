import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router';
import ApartmentDetails from '../components/apartments/ApartmentDetails';

const ApartmentDetailsPage = () => {
  const { id } = useParams();
  const { loading, error, apartments } = useSelector((state) => state.apartments);
  const apartment = apartments.find((apartment) => apartment.id === +id);
  return (
    <div className='apartment-page'>
      <ApartmentDetails {...apartment}/>
    </div>

  );
};

export default ApartmentDetailsPage;
