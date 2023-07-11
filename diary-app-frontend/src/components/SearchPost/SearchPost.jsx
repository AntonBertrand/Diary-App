import React, { useState } from 'react'
import './searchPost.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const SearchPost = () => {

    const [searchInput, setSearchInput] = useState();

    const navigate = useNavigate();

    const searchPosts = () => {

        navigate(`/search/${searchInput}`)

    }

  return (
    <div className='searchPost'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='searchBtn' onClick={searchPosts}/>
        <input type="text" placeholder='Search For a Diary Entry' onChange={(e) => {setSearchInput(e.target.value)}}/>
    </div>
  )
}
