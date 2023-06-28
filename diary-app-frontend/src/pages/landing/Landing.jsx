import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Hero from '../../components/Hero/Hero.jsx';
import Benefits from '../../components/Benefits/Benefits.jsx';
import './landing.css';
import Footer from '../../components/Footer/Footer';

const Landing = () => {
  return (
    <div className='landing'>
      <NavBar/>
      <Hero/>
      <Benefits/>
      <Footer/>
    </div>
  )
}

export default Landing;