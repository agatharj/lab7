import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './Profile';
import Dashboard from './Dashboard';
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Registration Form</h1>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
