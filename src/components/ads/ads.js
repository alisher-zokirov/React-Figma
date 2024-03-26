import React from 'react'
import './ads.css'

const Ads = () => {
  return (
    <div className='ads-all bg-dark'>
      <div className="container">
        <div className="row d-flex justify-content-center justify-content-around">
          <div className="col-6 text-white mt-5 ads-box1">
            <div className='boxes1'>
              <h2 className='mt-5'>Dairy Queen</h2>
              <p>Dairy Queen is one of the biggest <br/> fast-food.</p>

              <p className='text-warning'>$4 $6</p>

              <div>
                <div className='btn btn-warning m-0'>ORDER NOW</div>
              </div>
            </div>
          </div>  

          <div className="col-6 text-white mt-5 ads-box2">
            <div className='boxes2'>
              <h2 className='mt-5'>Pizza Hut</h2>
              <p>Although the Pizza Hut Menu br Prices .</p>

              <p className='text-warning'>$3 $7</p>

              <div>
                <div className='btn btn-warning m-0'>ORDER NOW</div>
              </div>
            </div>
          </div>  

          <div className="col-12 d-flex justify-content-center justify-content-around">
            <div className="col-6 text-white mt-5 ads-box3">
              <div className='boxes1'>
                <h2 className='mt-5'>Burger King</h2>
                <p>Together with McDonald’s, Burger <br/> King.</p>

                <p className='text-warning'>$5 $6</p>

                <div>
                  <div className='btn btn-warning m-0'>ORDER NOW</div>
                </div>
              </div>
            </div>   

            <div className="col-6 text-white mt-5 ads-box4">
              <div className='boxes2 ms-3'>
                <h2 className='mt-5'>Papa John’s</h2>
                <p>Papa John’s is one of the most <br/> popular fast-food.</p>

                <p className='text-warning'>$6 $8</p>

                <div>
                  <div className='btn btn-warning m-0'>ORDER NOW</div>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}   

export default Ads