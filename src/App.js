import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ReservationPage from './Pages/ReservationPage';
import ReservationDetailsPage from './Pages/ReservationDetailsPage';

const App = () => (
  <div className="w-full h-full font-montserrat  bg-dirty-white">

     <NavBar/>
     <Routes>
        <Route path="/" element={<ReservationPage/>}/>
       <Route path="/reservations" element={<ReservationPage/>}/>
       <Route path="/reservations/:id" element={<ReservationDetailsPage/>}/>
     </Routes>
  </div>
);

export default App;
