import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import UserDashboard from './components/UserDashboard';
import Wallet from './components/Wallet';
import FootfallGraph from './components/FootfallGraph';

function App() {
  return (
    <Router basename="/shop-glimpass">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/graph" element={<FootfallGraph />} />
      </Routes>
    </Router>
  );
}

export default App;
