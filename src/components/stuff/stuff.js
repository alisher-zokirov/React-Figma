import React from 'react'
import './stuff.css'
import Stuffimg from '../../assets/stuff.png'

const Stuff = () => {
  return (
    <div className='stuff-all bg-dark'>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-5 stuff-box">
            <img src={Stuffimg} alt="" />
          </div>

          <div className="col-5 text-center text-white stuff-text">
            <p>Thanks a lot for the prompt service. Really <br/> appreciate. Excellence taste in Every Bite.Add a joy <br/> of best Taste. Foodie Moments.</p>

            <h3>Adele A. McNeill</h3>
            <p>AMIRICAN</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stuff