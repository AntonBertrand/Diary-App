import {Link} from 'react-router-dom';
import './navbar.css';
import Cookies from 'js-cookie';


import React from 'react'

const NavBar = () => {

  const logout = () => {

    //POST FETCH TO DELETE COOKIE

    alert("You have logged out!");
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