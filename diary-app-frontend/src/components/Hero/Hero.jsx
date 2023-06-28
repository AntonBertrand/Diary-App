import React from 'react'
import BookIMG from '../../Assets/JournalImg.png'
import './hero.css'
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <div className='hero'>
    <div className="hero-left">
      <h1>MyDiary</h1>
      <h2>Your Personal Diary</h2>
      <div className="divider"></div>
      <p>Document your journey throughout life with MyDiary. Keeping a diary will help you keep your life in order where everything is feeling chaotic. Diaries are important for personal reflection.</p>
      <Link to="/signup"> <button className='hero-cta'>CREATE AN ACCOUNT</button> </Link>
    </div>
    <div className="hero-right">
      <div className="bgSquare"></div>
      <img className="hero-img" src={BookIMG} alt="" />
    </div>
  </div>
  )
}

export default Hero;