import React from 'react'
import './nav-header.css'
import Navbar from '../navbar/navbar'
import Header from '../header/header'
import HeaderBg from '../../assets/header-bg.jpg'

const NavHeader = () => {
  return (
    <div className='nav-header'>
        <Navbar />
        <Header />
    </div>
  )
}

export default NavHeader