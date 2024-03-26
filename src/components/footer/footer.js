import React from 'react'
import './footer.css'
import FooterLogo from '../../assets/logo.png'
import Email from '../../assets/email 1.png'
import Browser from '../../assets/global 1.png'
import FooterImgLinks from '../../assets/logo-links.png'

const Footer = () => {
  return (
    <div className='footer bg-dark'>
      <div className="container d-flex justify-content-center align-items-center justify-content-around">
        <div className='footer-logo mt-5'>
          <img src={FooterLogo} alt="" />

          <div className='text-white d-flex gap-2'>
            <div>
              <img src={Email} alt="" />
            </div>
            <p>fastfood_usa@gmail.com</p>
          </div>

          <div className='text-white d-flex gap-2'>
            <div>
              <img src={Browser} alt="" />
            </div>
            <p>www.fastfood_usa.com</p>
          </div>
        </div>  

        <div className='footer-link text-white mt-5'>
          <h5>Our menu</h5>

          <ul className='d-flex flex-column gap-3 list-unstyled'>
            <li>Breakfast</li>
            <li>Lunce</li>
            <li>Dinner</li>
          </ul>
        </div>

        <div className='footer-link text-white mt-5'>
          <h5>Information</h5>

          <ul className='d-flex flex-column gap-3 list-unstyled'>
            <li>About us </li>
            <li>Testimonial</li>
            <li>Event</li>
          </ul>
        </div>

        <div className='footer-link text-white mt-5'>
          <h5>Useful Links</h5>

          <ul className='d-flex flex-column gap-3 list-unstyled'>
            <li>Services</li>
            <li>Support</li>
            <li>Conditions</li>
          </ul>
        </div>

        <div className='footer-logo-links text-white mb-5'>
          <h5>Social Handles</h5>

          <img src={FooterImgLinks} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer