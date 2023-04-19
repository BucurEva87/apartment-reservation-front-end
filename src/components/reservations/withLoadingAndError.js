import { useSelector } from 'react-redux';

const withLoadingAndError = (ReservationList) => ({ reservations }) => {
  const { error, loading } = useSelector((state) => state.reservations);
  return (
       <>
        {loading && <h3 className="textError">Loading...</h3>}
        {error && <h3 className="textError">{error}</h3>}
        {!loading && !error && <ReservationList reservations={reservations} />}
        </>
  );
};

export default withLoadingAndError;