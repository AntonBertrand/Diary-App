import React from 'react'
import './posts.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Posts = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {

      const fetchPosts = async () => {
        const response = await fetch(`http://localhost:4000/api/posts/user/${id}`);
        
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
            const response = await fetch(`http://localhost:4000/api/posts/${id}`, {
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


  return (
    <div className='posts'>

        { posts && posts.map((post, i) => {

                   return (<div className="post" key={i}>
                    <div className="post-details">
                        <h2 className='post-title'>{post.title}</h2>
                        <span className='post-date'>{post.date}</span>
                        <span className='post-content'>{post.content}</span>
                    </div>
                    <div className="delete-button" onClick={() => {deletePost(post._id)}}>
                        <p>Delete Entry</p>
                    </div>
                </div>)
        })}

    </div>
  )
}

export default Posts