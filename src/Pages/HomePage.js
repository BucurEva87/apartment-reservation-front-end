import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import {
  Navigate, Route, Routes, redirect,
} from 'react-router-dom';
import Login from '../components/home/Login';
import RegistrationForm from '../components/home/RegistrationForm';
import { loadToken } from '../redux/authentication/authenticationSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authentication);

  if (!user) {
    const token = JSON.parse(localStorage.getItem('accessToken'));

    if (token && new Date().getTime() <= token.expirationTime) {
      const payload = { token: token.data };
      dispatch(loadToken(payload));
      redirect('/');
    } else {
      localStorage.removeItem('accessToken');
    }
  } else {
    redirect('/');
  }

  return <div className='home-page'>
    <ToastContainer />
    <Routes>
      <Route path="/user/new" element={ <RegistrationForm /> } />
      <Route path="/" element={ <Login /> } />
      <Route path="*" element={ <Navigate to="/" replace /> } />
    </Routes>
  </div>;
};

export default HomePage;
