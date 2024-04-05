import React from 'react'
import './Navbar.css'
import shop from '../../assets/shop.png'

const Navbar = () => {
  return (
    <nav>
        <h1>FOODIE</h1>
        <ul>
            <li>Accueil</li>
            <li>A propos</li>
            <li>Témoignages</li>
            <li>Contact</li>
            <img src={shop} alt="shop icon" />
            <button className='btn'>Réservez</button>
        </ul>
    </nav>

  )
}

export default Navbar