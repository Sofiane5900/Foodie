import React from 'react'
import './Hero.css'
import BackgroundHero from '../../assets/home-banner-image.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-left">
        <h1>Vos plats préférés livrés chauds et frais</h1>
        <p>Les chefs de Foodie s'occupent de tout le travail de préparation, comme 
          l'épluchage, le hachage et la marinade, afin que vous puissiez cuisiner des aliments frais.
        </p>
        <button className='btn'>Commandez maintenant</button>
        </div>

        <div className="hero-right">
          <img src={BackgroundHero} alt="hero" />
          </div>

        
    </div>
  )
}

export default Hero