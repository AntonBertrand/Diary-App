import React from 'react'
import './loginForm.css'

const LoginForm = () => {
  return (
    <div className='login'>
        <div className="login-form">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
                <button>Login</button>
                <a href="">Forgot Password?</a>
                <a href="">Not a member? - Signup</a>
            </form>
        </div>
    </div>
  )
}

export default LoginForm;