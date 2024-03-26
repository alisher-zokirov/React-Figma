import React from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='container d-flex justify-content-between align-items-center'>
      <div className='navbar-logo'>
        <img src={Logo} alt="" />
      </div>

      <ul className='navbar-links d-flex list-unstyled gap-3 mt-3'>
        <li><a className='text-decoration-none text-white' href="">HOME</a></li>
        <li><a className='text-decoration-none text-white' href="">PAGES</a></li>
        <li><a className='text-decoration-none text-white' href="">OUR OFFER</a></li>
        <li><a className='text-decoration-none text-white' href="">PRICING</a></li>
        <li><a className='text-decoration-none text-white' href="">SHOP</a></li>
      </ul>

      <div className='navbar-btn'>
        <div className='btn btn-warning m-0'>ORDER NOW</div>
      </div>
    </div>
  )
}

export default Navbar