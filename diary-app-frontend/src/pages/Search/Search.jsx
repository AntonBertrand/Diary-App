import React from 'react';
import Cookies from 'js-cookie';
import configData from "../../config.json";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './search.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { SearchPost } from '../../components/SearchPost/SearchPost.jsx';

const Search = () => {

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const searchInput = location.pathname.split("/")[2];


    useEffect(() => {

        const fetchPosts = async () => {

          const id = Cookies.get('user_id');

          const response = await fetch(`${configData.SERVER_URL}/api/posts/search/${id}/${searchInput}`);
          
          const json = await response.json();
  
          if (response.ok) setPosts(json);
      }
  
        const id = Cookies.get('user_id');
  
        if (!id) {
          console.log("User not logged in!")
        } else {
          fetchPosts();
        }
  
      }, []);


    const deletePost = async (id) => {

        try {
            const response = await fetch(`${configData.SERVER_URL}/api/posts/${id}`, {
                credentials: 'include',
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                },
                withCredentials: true
              });

              if(!response.ok){
                throw Error(response.statusText)
              }

              alert("Entry Deleted!")
              window.location.reload();

        } catch (err) {
            console.log(err);
            alert("Entry could not be deleted!")
        }
    }  


    const loadPost =  (id) => {
        navigate(`/post/${id}`);
    }

    const navigateHome = () => {
        navigate('/home');
    }

    return (
        <div className='home'>
            <NavBar/>
            <SearchPost/>
            <div className='posts'>
                    { posts && posts.map((post, i) => {

                            return (<div className="post" key={i}>
                                <div className="post-details" onClick={() => {loadPost(post._id)}}>
                                    <h2 className='post-title'>{post.title}</h2>
                                    <span className='post-date'>{post.date.substring(0,10)}</span>
                                    <span className='post-content'>{post.content.substring(0,150) + '...'}</span>
                                </div>
                                <div className="delete-button" onClick={() => {deletePost(post._id)}}>
                                    <p>X</p>
                                </div>
                            </div>)
                    })}

              <button className='home-btn' onClick={() => {navigateHome()}}>Back to Dashboard</button>        
            </div>
            <Footer/>
        </div>
      )
}

export default Search;
