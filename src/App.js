import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import ReservationPage from './Pages/ReservationPage';
import ReservationDetailsPage from './Pages/ReservationDetailsPage';
import ReservationCreatePage from './Pages/ReservationCreatePage';
import Apartments from './components/apartments/ApartmentsPage';
import ApartmentDetails from './components/apartments/ApartmentDetails';

const App = () => {
  const { user } = useSelector((state) => state.authentication);

  return <div className="w-full h-full font-montserrat  bg-dirty-white">
     { !user ? <HomePage/> : (
        <>
          <NavBar/>

          <Routes>
           <Route path="/reservations/create/:id" element={ <ReservationCreatePage/> }/>
           <Route path="/reservations/:id" element={ <ReservationDetailsPage/> }/>
           <Route path="/reservations" element={ <ReservationPage/> }/>
           <Route path="/" element={ <ReservationPage /> }/>
           <Route path="*" element={ <Navigate to="/reservations" replace /> } />
          </Routes>
        </>
     ) }
  </div>;
};

export default App;
