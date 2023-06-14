import React from 'react'
import './createPost.css'
import { useState } from 'react';

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');

    const postForm = async () => {

      const post = {
        "date": date,
        "title": title,
        "content": content
      };
        
        try {
          const response = await fetch('http://localhost:4000/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
              'Content-Type': 'application/json'
            }
          });

        } catch(err) {
          console.log(err);
        }


    }


  return (
    <div className='createPost'>
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