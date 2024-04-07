import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Title from '../Components/Title/Title'
import Work from '../Components/Work/Work'
import Testimonials from '../Components/Testimonials/Testimonials'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Title title='À propos de nous' />
        <About />
        <Title title='Nos étapes' />
        <Work />
        <Title title='Témoignages' />
        <Testimonials />
        <Contact />




        
    </div>
  )
}

export default Home