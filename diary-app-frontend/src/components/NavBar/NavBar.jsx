import {Link} from 'react-router-dom';
import './navbar.css';

import React from 'react'

const NavBar = () => {

  const logout = () => {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    alert("Cookies Cleared!");
  }

  return (
        <nav className='navBar'>
        <span>The Diary App</span>

            <ul>
                <li>
                    <Link className='link' to="/">Home</Link>
                </li>
            </ul>

            <div className="user-account">
              <span>User@Example.com</span>
              <Link to="/login"> <button>Login</button> </Link>
              <button onClick={logout}>Logout</button>
            </div>
        </nav>
  )
}

export default NavBar;