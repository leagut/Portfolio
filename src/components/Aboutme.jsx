import React from 'react'
import './styles/aboutme.css'
import im from '../images/ventana.JPG'

const Aboutme = () => {
  
  return (
    <div className='container-about2'>


      
      <div className='text'>
      ¡Hola!, Soy Leandro, me considero una persona muy curiosa y creativa. Mi ambiente favorito de desarrollo es el MERN, mi objetivo primordial es crear soluciones que generen una plusvalía donde trabaje y hacia sus clientes. Cuento con habilidades en metodología scrum y gestión de proyectos junto con un pensamiento creativo y catalizador de ideas con el cual puedo enriquecer los grupos donde trabajo.

      </div>

    

      <img src={im} className='logo' alt='nada' /> 

      

    </div>
  )
}

export default Aboutme