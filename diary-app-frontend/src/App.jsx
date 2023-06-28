import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import Landing from './pages/landing/Landing.jsx'
import LoginForm from './components/LoginForm/LoginForm.jsx'
import SignupForm from './components/SignupForm/SignupForm.jsx';
import React from 'react';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element = {<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>} />
      </Routes>
  );
}

export default App;