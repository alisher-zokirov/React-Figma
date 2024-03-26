import React from 'react'
import './products.css'
import ProduckItem from '../products/produck/produck-item'
import Col1 from '../../assets/products1.jpg'
import Col2 from '../../assets/products2.jpg'
import Col3 from '../../assets/products3.jpg'
import Col4 from '../../assets/products4.png'

const Product = () =>{
  const data =[
    {img: Col1, title: 'Chicken Paella', text: 'bu tovuq zor tovuq'},
    {img: Col2, title: 'Chicken Paella', text: 'bu tovuq zor tovuq'},
    {img: Col3, title: 'Chicken Paella', text: 'bu tovuq zor tovuq'},
    {img: Col4, title: 'Chicken Paella', text: 'bu tovuq zor tovuq'},
  ]
}

const Products = () => {
  return (
    <div className='container-1 bg-dark products-container'>
      <div className="container">
        <div className="row d-flex justify-content-between text-white p-5">
          {/* <ProduckItem img = {Col1} title='Chisken Pella ' text='bu tovuq zor tovuq'/>
          <ProduckItem img = {Col2} title='Chisken Pella ' text='bu tovuq zor tovuq'/>
          <ProduckItem img = {Col3} title='Chisken Pella ' text='bu tovuq zor tovuq'/>
          <ProduckItem img = {Col4} title='Chisken Pella ' text='bu tovuq zor tovuq'/> */}
        </div>  
      </div>
    </div>
  )
}

export default Product