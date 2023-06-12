import {Link} from 'react-router-dom';
import './navbar.css';

import React from 'react'

const NavBar = () => {
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
              <button>Login</button>
            </div>
        </nav>
  )
}

export default NavBar;