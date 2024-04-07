import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
       <h2>Vous avez une question en tête ?</h2>

        <div className='contact-container'>
                <input className="contact" type="text" placeholder="votremail@gmail.com" /> 
                <button className='btn'>Envoyez</button>
            </div>
    </div>
  )
}

export default Contact