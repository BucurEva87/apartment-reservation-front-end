import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApartments } from '../../redux/apartments/apartmentsThunk';
import ApartmentList from './ApartmentList';

const ApartmentsContainer = () => {
  const { apartments } = useSelector((state) => state.apartments);

  const { accessToken } = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (apartments.length === 0) {
      dispatch(fetchApartments(accessToken));
    }
  }, []);

  return (
    <div className="flex flex-col gap-12 items-center w-fit m-auto md:w-full  md:flex-col justify-between py-8">
    <ApartmentList apartments={apartments}/>
  </div>
  );
};

export default ApartmentsContainer;