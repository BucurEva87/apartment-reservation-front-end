import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import ReservationPage from './Pages/ReservationPage';
import ReservationDetailsPage from './Pages/ReservationDetailsPage';
import ReservationCreatePage from './Pages/ReservationCreatePage';
import ApartmentPage from './Pages/ApartmentPage';
import ApartmentDetailsPage from './Pages/ApartmentDetailsPage';
import ApartmentCreatePage from './Pages/ApartmentCreatePage';

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
           <Route path="/apartments/create" element={ <ApartmentCreatePage /> }/>
           <Route path="/apartments/:id" element={ <ApartmentDetailsPage /> }/>
           <Route path="/apartments" element={ <ApartmentPage />}/>
           <Route path="/" element={ <ReservationPage /> }/>
           <Route path="*" element={ <Navigate to="/reservations" replace /> } />
          </Routes>
        </>
     ) }
  </div>;
};

export default App;
