import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import MyTripPlan from './components/MyTripPlan';

ReactDOM.render(
    <Router>
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/myTripPlan' exact element={<MyTripPlan/>} />
      </Routes>
    </Router>
    ,document.getElementById('root')
);
