import {Link, useNavigate} from 'react-router-dom';
import './navbar.css';
import Cookies from 'js-cookie';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import configData from "../../config.json";

import React, { useEffect, useState } from 'react'

const NavBar = () => {

  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    loginStatus();
  }, [])
  

  const logout = async () => {

    try{
      const response = await fetch(`${configData.SERVER_URL}/api/users/logout`, {
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

  const mobileNavStatus = () => {
    if(mobileNavOpen) {
      setMobileNavOpen(false);
    } else {
      setMobileNavOpen(true);
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
              { loggedIn ? <button onClick={logout}>Logout</button> : <Link to="/signup"><button>Create an Account</button></Link>}
            </div>

            <div className="mobile-nav" onClick={mobileNavStatus}>
            <FontAwesomeIcon icon={faBars}/>
            { mobileNavOpen && 
                <ul className="mobile-nav-menu">
                  <li><Link className='link' to="/">Home</Link></li>
                  <Link to="/login"> <li>{loggedIn ? "Dashboard" : "Login"}</li> </Link>
                  { loggedIn ? <li onClick={logout}>Logout</li> : <Link to="/signup"><li>Create an Account</li></Link>}
                </ul>
              }
            </div>
        </nav>
  )
}

export default NavBar;