import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import LoginForm from './components/LoginForm/LoginForm.jsx'
import SignupForm from './components/SignupForm/SignupForm.jsx';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element = {<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>} />
      </Routes>
  );
}

export default App;
