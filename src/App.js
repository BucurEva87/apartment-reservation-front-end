import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';

const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </div>
);
export default App;
