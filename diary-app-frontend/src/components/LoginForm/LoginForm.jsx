import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import './loginForm.css'
import Cookies from 'js-cookie';


const LoginForm = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    
    e.preventDefault()

    const user = {
      "username": username,
      "password": password
    }

    try {

      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json'},
        credentials: 'include'
      }).then(response => response.json())
      .then(data => {

          if (data.status === "ok") {
            Cookies.set('access_token', data.access_token, { expires: 7 });
            alert("Logged In!");
            navigate("/")
          } else {
            alert("Invalid Username/Password combination!");
          }
      })

    } catch(err) {
      console.log(err);
      alert("Incorrect!");
    }

  }

  return (
    <div className='login'>
        <div className="login-form">
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' onChange={ (e) => {setUsername(e.target.value)}}/>
                <input type="text" placeholder='Password'onChange={ (e) => {setPassword(e.target.value)}}/>
                <button>Login</button>
                <a href="">Forgot Password?</a>
                <Link to="/signup"><a href="">Not a member? - Signup</a></Link>
            </form>
        </div>
    </div>
  )
}

export default LoginForm;