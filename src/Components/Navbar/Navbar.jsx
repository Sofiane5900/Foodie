import React from 'react'
import './Navbar.css'
import shop from '../../assets/shop.png'

const Navbar = () => {

  const [sticky, setSticky] = React.useState(false);

  React.useEffect(() => {
      window.addEventListener("scroll", () => {
          window.scrollY > 50 ? setSticky(true) : setSticky(false);
      });
  }, []);


  return (
    <nav className={`container ${sticky? 'orange-nav' : '' }`}>
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