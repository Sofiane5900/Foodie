import React from 'react'
import './Testimonials.css'
import Avatar from '../../assets/john-doe-image.png'
import Stars from '../../assets/stars.png'

const Testimonials = () => {
  return (
    <div className='container'>
        <h2>Ce que disent nos clients ?</h2>
        <h4>Découvrez ce que nos clients ont à dire sur leur expérience avec nos produits et services</h4>

        <div className='testimonials'>
            <img className="avatar" src={Avatar} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="stars">
            <img src={Stars} alt="" />
            <img src={Stars} alt="" />
            <img src={Stars} alt="" />
            <img src={Stars} alt="" />
            <img src={Stars} alt="" />
            </div>
            <h3>John Doe</h3>
        </div>

        <div className='testimonials'>
            <img className="avatar" src={Avatar} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="stars">
            <img src={Stars} alt="" />
            <img src={Stars} alt="" />
            <img src={Stars} alt="" />
            <img src={Stars} alt="" />
            <img src={Stars} alt="" />
            </div>
            <h3>John Doe</h3>
        </div>
    </div>
  )
}

export default Testimonials