import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ReservationPage from './Pages/ReservationPage';

const App = () => (
  <div className="w-full h-full font-montserrat  bg-dirty-white">

     <NavBar/>
     <Routes>
       <Route path="/" element={<ReservationPage/>}/>
     </Routes>
  </div>
);

export default App;
