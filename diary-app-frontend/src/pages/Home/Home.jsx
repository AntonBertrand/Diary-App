import React from 'react'
import NavBar from '../../components/NavBar/NavBar.jsx'
import Posts from '../../components/NavBar/Posts/Posts.jsx'
import CreatePost from '../../components/CreatePost/CreatePost.jsx'
import './home.css';

const Home = () => {
  return (
    <div>
        <NavBar/>

        <div className='home-container'>
          <Posts/>
          <CreatePost/>
        </div>
    </div>
  )
}

export default Home;