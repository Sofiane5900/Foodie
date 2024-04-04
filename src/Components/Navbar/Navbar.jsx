import React from 'react'
import './Navbar.css'
import shop from '../../assets/shop.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <h1>FOODIE</h1>
        <ul>
            <li>Accueil</li>
            <li>A propos</li>
            <li>Témoignages</li>
            <li>Contact</li>
            <img src={shop} alt="shop icon" />
            <button>Réservez</button>
        </ul>
    </nav>

  )
}

export default Navbar