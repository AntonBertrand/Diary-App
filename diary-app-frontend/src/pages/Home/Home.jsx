import React from 'react';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Posts from '../../components/Posts/Posts.jsx';
import CreatePost from '../../components/CreatePost/CreatePost.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
        <div className='home-container'>
          <Posts/>
          <CreatePost/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home;