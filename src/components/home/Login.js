import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/authentication/authenticationThunk';

const Login = () => {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {
    dispatch(login({ email: emailRef.current.value, password: passwordRef.current.value }));
  };

  return (
    <>
 <div className="flex justify-center items-center h-screen bg-gray-100">
  <div className="bg-white p-10 rounded-lg shadow-xl transform transition-all w-2/3 max-w-md hover:scale-105">
    <h1 className="text-2xl font-bold mb-8 text-center">Login</h1>
    <form className="space-y-5">
      <div>
        <label className="block mb-1 font-bold">Email</label>
        <input type="email" className="block w-full p-2 border rounded-lg" name="email" id="email" ref={emailRef} />
      </div>
      <div>
        <label className="block mb-1 font-bold">Password</label>
        <input type="password" name="password" id="password" ref={passwordRef} className="block w-full p-2 border rounded-lg" />
      </div>
      <div>
        <button type="button" onClick={handleLogin} className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">Login</button>
      </div>
    </form>
    <hr className="my-6 border-gray-300 w-full" />
    <div className="text-center">
      <Link to="/user/new" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Register</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default Login;
