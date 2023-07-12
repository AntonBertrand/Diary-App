import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './post.css'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import configData from "../../config.json";

const Post = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id)

  const [post, setPost] = useState();

  useEffect(() => {
    
    const fetchPost = async () => {

      const response = await fetch(`${configData.SERVER_URL}/api/posts/${id}`);

      const json = await response.json();

      setPost(json);

    }

    fetchPost();

  }, []);

  const navigateHome = () => {
    navigate("/home");
  }
  

  return (
    <div className='post-page'>
        <NavBar/>
        { post && <div className='post-container'>
            <h1 className="post-title">{post.title}</h1>
            <h2 className="post-date">{post.date.substring(0,10)}</h2>
            <p className='post-content'>{post.content}</p>
            <button className='home-btn' onClick={() => {navigateHome()}}>Back to Dashboard</button>
        </div>}
        <Footer/>
    </div>
  )
}

export default Post;