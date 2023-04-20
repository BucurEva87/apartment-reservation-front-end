import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import ReservationPage from './Pages/ReservationPage';
import ReservationDetailsPage from './Pages/ReservationDetailsPage';
import ReservationCreatePage from './Pages/ReservationCreatePage';
import Apartments from './components/apartments/ApartmentsPage';
import ApartmentDetails from './components/apartments/ApartmentDetails';
import Scream from './components/home/Scream';

const App = () => {
  const { user } = useSelector((state) => state.authentication);

  return <div className="w-full h-full font-montserrat  bg-dirty-white">
     { !user ? <HomePage/> : (
        <>
          <NavBar/>

          <Routes>
           <Route path="/reservations" element={<ReservationPage/>}/>
           <Route path="/reservations/:id" element={<ReservationDetailsPage/>}/>
           <Route path="/reservations/create/:id" element={<ReservationCreatePage/>}/>
           <Route exact path="/" element={<Scream />}/>
          </Routes>
        </>
     ) }
  </div>;
};

export default App;
