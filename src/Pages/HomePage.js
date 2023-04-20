import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../components/home/Home';
import Login from '../components/Login';

const HomePage = () => {
  const { user } = useSelector((state) => state.authentication);
  return (
    <div className='home-page'>
      <ToastContainer />
      <Login />
    </div>

  );
};

export default HomePage;
