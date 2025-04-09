import React from 'react'
import Home from '../Component/Home/Home'
import About from '../Component/About/About'
import Services from '../Component/Services/Services'
import Works from '../Component/Works/Works'
import Contact from '../Component/Contact/Contact'
import Footer from '../Component/Footer/Footer'

const Firstpg = () => {
  return (
    <div>
        <Home />
        <About />
        <Services/>
        <Works/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Firstpg