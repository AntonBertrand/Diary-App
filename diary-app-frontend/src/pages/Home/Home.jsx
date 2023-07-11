import React from 'react';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Posts from '../../components/Posts/Posts.jsx';
import CreatePost from '../../components/CreatePost/CreatePost.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './home.css';
import { SearchPost } from '../../components/SearchPost/SearchPost.jsx';

const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
        <SearchPost/>
        <div className='home-container'>
          <Posts/>
          <CreatePost/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home;