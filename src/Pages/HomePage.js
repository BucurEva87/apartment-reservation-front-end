import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/home/Login';
import RegistrationForm from '../components/home/RegistrationForm';

const HomePage = () => {
  const { user } = useSelector((state) => state.authentication);

  return (
    <div className='home-page'>
      <ToastContainer />
      <Routes>
        <Route path="/user/new" element={ <RegistrationForm /> } />
        <Route path="/" element={ <Login /> } />
        <Route element={ <Login /> } />
      </Routes>
    </div>
  );
};

export default HomePage;
