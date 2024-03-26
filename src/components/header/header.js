import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='container mt-5 pt-5'>
      <div className='header mt-5 pt-5'>
      <h6 className='text-white'>FAST FOOD BURGERS</h6>
      <h1 className='text-white'>The fastest food, for instant hunger.</h1>
      <p className='text-white'>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words & my food and gone back for seconds.</p>
      <button className="btn btn-warning" type="button">ORDER NOW</button>
      </div>
    </div>
  )
}

export default Header