import React from 'react'
import NavBar from '../components/NavBar/NavBar.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <NavBar/>

        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout;