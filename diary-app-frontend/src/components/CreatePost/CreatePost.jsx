import React from 'react'
import './createPost.css'
import { useState } from 'react';
import Cookies from 'js-cookie';
import configData from "../../config.json";
import { useNavigate } from 'react-router';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()


    const postForm = async (e) => {

      e.preventDefault();

      setLoading(true);

      const post = {
        "createdBy": Cookies.get('user_id'),
        "date": date,
        "title": title,
        "content": content
      };
    
      try{

        const response = await fetch(`${configData.SERVER_URL}/api/posts`, {
          credentials: 'include',
          method: 'POST',
          body: JSON.stringify(post),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if(!response.ok){
          setLoading(false);
          throw Error(response.statusText)
        }

        setLoading(false);
        navigate(0)

      } catch(err) {
        setLoading(false);
        console.log(err)
        alert("You must be logged in!");
      }



    }


  return (
    <div className='createPost'>
        {loading ? <LoadingSpinner /> : null}
        <h2>Create an Entry</h2>
        <form action="">
            <input type="text" placeholder='Title' onChange={e => setTitle((e.target.value))}/>
            <input type="date" placeholder='dd/mm/yyyy' onChange={e => setDate((e.target.value))}/>
            <textarea name="" id="" cols="30" rows="10" onChange={e => setContent((e.target.value))}></textarea>
            <button onClick={postForm}>Submit Entry</button>
        </form>
    </div>
  )
}

export default CreatePost;