import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import './loginForm.css'
import Cookies from 'js-cookie';
import configData from "../../config.json";


const LoginForm = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {

    if (!Cookies.get('user_name')) {
      return;
    } else {
      navigate('/home')
    }

  }, [])
  

  const handleSubmit = async (e) => {
    
    e.preventDefault()

    const userAcc = {
      "username": username,
      "password": password
    }

    try {

      const response = await fetch(`${configData.SERVER_URL}/api/users/login`, {
        method: "POST",
        body: JSON.stringify(userAcc),
        headers: { 'Content-Type': 'application/json'},
        credentials: 'include'
      }).then(response => response.json())
      .then(data => {

          if (data.status === "ok") {
            Cookies.set('access_token', data.access_token, { expires: 7 });
            Cookies.set('user_id', data.user_id, { expires: 7 });
            Cookies.set('user_name', data.user_name, { expires: 7 });
            alert("Logged In!");
            navigate("/home")
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
                <Link to="/signup">Not a member? - Signup</Link>
            </form>
        </div>
    </div>
  )
}

export default LoginForm;