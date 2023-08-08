import React from 'react'
import './posts.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Pagination } from '../Pagination/Pagination';
import configData from "../../config.json";
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {

      const fetchPosts = async () => {
        setLoading(true);
        const response = await fetch(`${configData.SERVER_URL}/api/posts/user/${id}`);
        
        const json = await response.json();

        if (response.ok) {
          setLoading(false);
          setPosts(json);
        } 
    }

      const id = Cookies.get('user_id');

      if (!id) {
        console.log("User not logged in!")
      } else {
        fetchPosts();
      }

    }, []);


    const loadPost =  (id) => {
      navigate(`/post/${id}`);
    }


    const deletePost = async (id) => {
      setLoading(true);


        try {
            const response = await fetch(`${configData.SERVER_URL}/api/posts/${id}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
              });

              if(!response.ok){
                setLoading(false);
                throw Error(response.statusText)
              }

              setLoading(false);
              alert("Entry Deleted!")
              navigate(0);

        } catch (err) {
          setLoading(false);
            console.log(err);
            alert("Entry could not be deleted!")
        }
       

    }


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = posts.slice(firstPostIndex ,lastPostIndex);

  return (
    <div className='posts'>

        {loading ? <LoadingSpinner /> : null}

        { currentPosts && currentPosts.map((post, i) => {

                   return (<div className="post" key={i} onClick={() => {loadPost(post._id)}}>
                    <div className="post-details">
                        <h2 className='post-title'>{post.title}</h2>
                        <span className='post-date'>{post.date.substring(0,10)}</span>
                        <span className='post-content'>{post.content.substring(0,150) + '...'}</span>
                    </div>
                    <div className="delete-button" onClick={(e) => {
                      e.stopPropagation(); 
                      deletePost(post._id)}}>
                        <p>X</p>
                    </div>
                </div>)
        })}

        <Pagination totalPosts = {posts.length} postsPerPage = {postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

    </div>
  )
}

export default Posts