import React from 'react'
import './signupForm.css'

const SignupForm = () => {
  return (
    <div className='signup'>
        <div className="signup-form">
            <h1>Signup</h1>
            <form action="">
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
                <button>Signup</button>
                <a href="">Forgot Password?</a>
                <a href="">Already have an account? - Signin</a>
            </form>
        </div>
    </div>
  )
}

export default SignupForm;