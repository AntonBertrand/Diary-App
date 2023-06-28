import {Link, useNavigate} from 'react-router-dom';
import './navbar.css';
import Cookies from 'js-cookie';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import React, { useEffect, useState } from 'react'

const NavBar = () => {

  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    loginStatus();
  }, [])
  

  const logout = async () => {

    try{
      const response = await fetch('http://localhost:4000/api/users/logout', {
        method: 'POST',
        credentials: 'include',
      });

      Cookies.remove('access_token');
      Cookies.remove('user_id');
      Cookies.remove('user_name');
      navigate("/")
      setLoggedIn(false);

    } catch (err){
      console.log(err.message);
    }

  }

  const loginStatus = () => {

    if (!Cookies.get('user_name')) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }

  }

  return (
        <nav className='navBar'>
        <div className="logo">
        <span>The Diary App</span>
        <FontAwesomeIcon icon={faBook} />
        </div>

            <ul className='home-button'>
                <li>
                    <Link className='link' to="/">Home</Link>
                </li>
            </ul>

            <div className="user-account">
              <span>{Cookies.get('user_name')}</span>
              <Link to="/login"> <button>{loggedIn ? "Dashboard" : "Login"}</button> </Link>
              { loggedIn && <button onClick={logout}>Logout</button>}
            </div>

            <div className="mobile-nav">
            <FontAwesomeIcon icon={faBars}/>
            </div>
        </nav>
  )
}

export default NavBar;