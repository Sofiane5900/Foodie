import React from 'react'
import './Work.css'
import Pick from '../../assets/pick-meals-image.png'
import Choose from '../../assets/choose-image.png'
import Delivery from '../../assets/delivery-image.png'


const Work = () => {
  return (
    <div className='container'>
      <h2>Comment ça marche</h2>
    <h4>Notre service de livraison de repas fonctionne en 3 étapes simples</h4>

    <div className='works'>
      <div className="work">
        <img src={Pick} alt="" />
        <h3>Choisissez vos repas</h3>
        <p>Veuillez sélectionner vos plats préférés parmi notre délicieux menu.</p>
      </div>
      <div className="work">
        <img src={Choose} alt="" />
        <h3>Choisissez la fréquence</h3>
        <p>Choisissez la fréquence à laquelle vous souhaitez recevoir vos plats.</p>
      </div>
      <div className="work">
        <img src={Delivery} alt="" />
        <h3>Livraison rapide</h3>
        <p>Profitez de notre service de livraison rapide pour recevoir vos plats rapidement et en toute simplicité.</p>
      </div>
    </div>
    </div>
  )
}

export default Work