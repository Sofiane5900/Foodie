import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container'>
       <h2>Vous avez une question en tête ?</h2>

        <div className='contact-container'>
                <input className="contact" type="text" placeholder="votremail@gmail.com" /> 
                <button className='secondary-btn'>Envoyez</button>
            </div>
    </div>
  )
}

export default Contact