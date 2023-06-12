import React from 'react'
import './posts.css';
import { useEffect, useState } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:4000/api/posts');
            
            const json = await response.json();

            if (response.ok) setPosts(json);
        }

        fetchPosts();
    }, []);

  return (
    <div className='posts'>

        { posts && posts.map((post) => {

                   return (<div className="post">
                    <div className="post-details">
                        <h2 className='post-title'>{post.title}</h2>
                        <span className='post-date'>{post.date}</span>
                        <span className='post-content'>{post.content}</span>
                    </div>
                    <div className="delete-button">
                        <p>Delete Entry</p>
                    </div>
                </div>)
        })}

    </div>
  )
}

export default Posts