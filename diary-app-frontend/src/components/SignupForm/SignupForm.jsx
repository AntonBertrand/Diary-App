import React, { useState } from 'react'
import './signupForm.css'

const SignupForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const account = {
      "username": username,
      "password": password,
    };

    try {
      const response = await fetch('')
    } catch (err) {

    }
  }


  return (
    <div className='signup'>
        <div className="signup-form">
            <h1>Signup</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' onChange={e => setUsername(e.target.value)}/>
                <input type="text" placeholder='Password'onChange={e => setPassword(e.target.value)}/>
                <button>Signup</button>
                <a href="">Forgot Password?</a>
                <a href="">Already have an account? - Signin</a>
            </form>
        </div>
    </div>
  )
}

export default SignupForm;