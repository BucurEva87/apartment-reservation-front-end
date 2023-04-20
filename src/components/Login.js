import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import login from '../redux/authentication/authenticationThunk';
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
    <div className='form-group'>
      <input type="email" name="email" id="email" ref={emailRef} className="form-control" />
      <input type="password" name="password" id="password" ref={passwordRef} className="form-control" />
      <button type="button" onClick={handleLogin} className="btn btn-primary btn-sm">Sign in</button>
    </div>
  );
};

export default Login;
