import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom';
import './signupForm.css'

const SignupForm = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const account = {
      "username": username,
      "password": password,
    };

    try {
      const response = await fetch('http://localhost:4000/api/users/signup', {
        method: "POST",
        body: JSON.stringify(account),
        headers: { 'Content-Type': 'application/json'}
      });

      alert("Account created!");
      navigate("/")
    } catch (err) {
      alert(err)
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
                <Link to="/login">Already have an account? - Signin</Link>
            </form>
        </div>
    </div>
  )
}

export default SignupForm;