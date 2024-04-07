import React from 'react'
import './Testimonials.css'
import Avatar from '../../assets/john-doe-image.png'

const Testimonials = () => {
  return (
    <div className='container'>
        <h2>Ce que disent nos clients ?</h2>
        <h4>Notre service de livraison de repas fonctionne en 3 étapes simples</h4>

        <div className='testimonials'>
            <img src={Avatar} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>John Doe</h3>


        </div>
    </div>
  )
}

export default Testimonials