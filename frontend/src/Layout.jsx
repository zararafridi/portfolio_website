import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Layout() {
  return (
    <>
        <Navbar />
      <div className='px-20 pt-20 bg-gradient-to-br from-white to-purple-50 min-h-screen'>
        <Outlet/>
      </div>
      <Footer />
    </>
  )
}

export default Layout