import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import MyTripPlan from './components/MyTripPlan';
import Login from './components/Login';
import Signup from './components/Signup';

ReactDOM.render(
    <Router>
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/myTripPlan' exact element={<MyTripPlan/>} />
        <Route path='/login' exact element={<Login/>} />
        <Route path='/signup' exact element={<Signup/>} />
      </Routes>
    </Router>
    ,document.getElementById('root')
);
