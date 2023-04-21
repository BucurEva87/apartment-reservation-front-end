import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authentication/authenticationThunk';
import { loadToken } from '../redux/authentication/authenticationSlice';

const Login = () => {
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem('accessToken'));

  if (token && new Date().getTime() <= token.expirationTime) {
    // console.log('Trying to dispatch')
    const payload = { token: token.data };
    console.log(payload);
    dispatch(loadToken(payload));
  }

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {
    dispatch(login({ email: emailRef.current.value, password: passwordRef.current.value }));
  };

  return (
    <>
 <div class="flex justify-center items-center h-screen bg-gray-100">
  <div class="bg-white p-10 rounded-lg shadow-xl transform transition-all w-2/3 max-w-md hover:scale-105">
    <h1 class="text-2xl font-bold mb-8 text-center">Login</h1>
    <form class="space-y-5">
      <div>
        <label class="block mb-1 font-bold">Email</label>
        <input type="email" class="block w-full p-2 border rounded-lg" name="email" id="email" ref={emailRef} />
      </div>
      <div>
        <label class="block mb-1 font-bold">Password</label>
        <input type="password" name="password" id="password" ref={passwordRef} class="block w-full p-2 border rounded-lg" />
      </div>
      <div>
        <button type="button" onClick={handleLogin} class="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">Login</button>
      </div>
    </form>
    <hr class="my-6 border-gray-300 w-full" />
    <div class="text-center">
      <button type="button" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Register</button>
    </div>
  </div>
</div>

    </>
  );
};

export default Login;
