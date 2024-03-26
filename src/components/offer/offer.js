import React from 'react'
import './offer.css'
import Gamburger from '../../assets/offer.png'

const Offer = () => {
  return (
    <div className='container-2'>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={Gamburger} alt="" />
          </div>  

          <div className="col-6 d-flex flex-column  justify-content-center burger-text text-white">
            <h2>Burger King</h2>

            <p>Together with McDonald’s, Burger King has grown <br/> to become synonymous with burgers in the US.</p> 

            <p className='text-warning'>$6 $8</p>

            <div>
              <div className='btn btn-warning m-0'>ORDER NOW</div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Offer;