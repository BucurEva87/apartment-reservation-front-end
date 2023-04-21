import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../../redux/reservations/reservationsThunk';
import ReservationList from './ReservationList';

const ReservationsContainer = () => {
  const { reservations } = useSelector((state) => state.reservations);
  const { accessToken } = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (reservations.length === 0) {
      console.log('access tokennnn', accessToken);
      dispatch(fetchReservations(accessToken));
    }
  }, []);

  return (
    <div className="flex flex-col gap-12 items-center w-fit m-auto md:w-full  md:flex-col justify-between py-8">
    <ReservationList reservations={reservations}/>
  </div>
  );
};

export default ReservationsContainer;