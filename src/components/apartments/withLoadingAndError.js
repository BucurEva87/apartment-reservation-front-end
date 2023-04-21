import { useSelector } from 'react-redux';

const withLoadingAndError = (ApartmentList) => ({ apartments }) => {
  const { error, loading } = useSelector((state) => state.apartments);
  return (
       <>
        {loading && <h3 className="textError">Loading...</h3>}
        {error && <h3 className="textError">{error}</h3>}
        {!loading && !error && <ApartmentList apartments={apartments} />}
        </>
  );
};

export default withLoadingAndError;