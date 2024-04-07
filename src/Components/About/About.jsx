import React from 'react'
import './About.css'
import BackgroundAbout from '../../assets/about-background-image.png'
import PlayButton from '../../assets/play.png'


const About = () => {
  return (
    <div className='about container'>

        <div className="about-left">
            <img src={BackgroundAbout} alt="background du about" />
            </div>
            
            <div className="about-right">
                <h1>L'alimentation est un élément important d'un régime équilibré</h1>
                <p>La nourriture est un élément essentiel d'une alimentation équilibrée, fournissant les nutriments et l'énergie nécessaires pour soutenir la santé et le bien-être général.
                     Elle sert de carburant pour le corps, nourrissant les cellules,
                     les tissus et les organes, tout en jouant un rôle crucial dans le maintien d'un poids santé et la prévention des maladies.</p>
                     <div className="about-right-buttons"> 
                      <button className='btn'>En savoir plus</button>
                      <button className='watch-video'><img src={PlayButton} alt="" />Regarder une vidéo</button>
                    </div>


                </div>
   </div>
  )
}

export default About