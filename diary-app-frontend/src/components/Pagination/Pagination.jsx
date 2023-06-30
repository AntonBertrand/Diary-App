import React from 'react';
import './pagination.css';

export const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];

    for (let i = 1 ; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i);
    }

  return (
    <div className='pagination'>
        {
            pages.map((page, index) => {
                return <button className={page == currentPage ? 'active' : ''} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            })
        }
    </div>
  )
}
