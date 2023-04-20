import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authentication/authenticationThunk';
import { loadToken } from '../../redux/authentication/authenticationSlice';

const Login = () => {
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem('accessToken'));

  if (token && new Date().getTime() <= token.expirationTime) {
    const payload = { token: token.data };
    dispatch(loadToken(payload));
  }

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {
    dispatch(login({ email: emailRef.current.value, password: passwordRef.current.value }));
  };

  return (
    <>
      <input type="email" name="email" id="email" ref={emailRef} />
      <input type="password" name="password" id="password" ref={passwordRef} />
      <button type="button" onClick={handleLogin}>Sign in</button>
    </>
  );
};

export default Login;
