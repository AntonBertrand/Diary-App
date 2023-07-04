import React from 'react'
import './posts.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Pagination } from '../Pagination/Pagination';
import configData from "../../config.json";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);


    useEffect(() => {

      const fetchPosts = async () => {
        const response = await fetch(`${configData.SERVER_URL}/api/posts/user/${id}`);
        
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


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = posts.slice(firstPostIndex ,lastPostIndex);

  return (
    <div className='posts'>

        { currentPosts && currentPosts.map((post, i) => {

                   return (<div className="post" key={i}>
                    <div className="post-details">
                        <h2 className='post-title'>{post.title}</h2>
                        <span className='post-date'>{post.date.substring(0,10)}</span>
                        <span className='post-content'>{post.content.substring(0,150) + '...'}</span>
                    </div>
                    <div className="delete-button" onClick={() => {deletePost(post._id)}}>
                        <p>X</p>
                    </div>
                </div>)
        })}

        <Pagination totalPosts = {posts.length} postsPerPage = {postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

    </div>
  )
}

export default Posts