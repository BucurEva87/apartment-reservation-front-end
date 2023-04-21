import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Login from './components/Login';
import ReservationPage from './Pages/ReservationPage';
import ApartmentPage from './Pages/ApartmentPage';
import ReservationDetailsPage from './Pages/ReservationDetailsPage';
import ApartmentDetailsPage from './Pages/ApartmentDetailsPage';
import ReservationCreatePage from './Pages/ReservationCreatePage';

const App = () => {
  const { user } = useSelector((state) => state.authentication);

  return <div className="w-full h-full font-montserrat  bg-dirty-white">
     { !user ? <Login/> : (
        <>
          <NavBar/>

          <Routes>
           <Route path="/reservations" element={<ReservationPage/>}/>
           <Route path="/reservations/create/:id" element={<ReservationCreatePage/>}/>
           <Route path="/reservations/:id" element={<ReservationDetailsPage/>}/>
           <Route path="/" element={<ApartmentPage/>}/>
           <Route path="/:id" element={<ApartmentDetailsPage/>}/>
          </Routes>
        </>
     ) }
  </div>;
};

export default App;
