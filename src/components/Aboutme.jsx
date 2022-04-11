import React from 'react'
import './styles/aboutme.css'
import im from '../images/ventana.svg'

const Aboutme = () => {
  
  return (
    <div className='container-about'>


      
      <div className='text'>
      Mi nombre es Leandro Gutierrez Scarpetta, tengo 31 años y me considero una persona muy curiosa, creativa y autodidacta. Mi tecnología favorita para desarrollar es React soportado en el stack MERN. Mi objetivo primordial es desarrollar soluciones tecnológicas que generen un gran impacto en la sociedad aplicando mis conocimientos y creatividad con el desarrollo de software.
      </div>

      <img src={im} className='logo' alt='nada' />

      

    </div>
  )
}

export default Aboutme