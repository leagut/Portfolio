import React from 'react'
import './styles/aboutme.css'
import im from '../images/ventana.JPG'

const Aboutme = () => {
  
  return (
    <div className='container-about2'>


      
      <div className='text'>
      ¡Hola! Soy Leo, un desarrollador con gusto por el backend, curioso y creativo, siempre con ganas de aprender cosas nuevas. Mi objetivo principal es generar soluciones de valor tanto para la empresa en la que trabajo como para sus clientes. Tengo habilidades en metodología Scrum y un pensamiento consolidador de ideas que enriquece los equipos con los que colaboro.

      </div>

    

      <img src={im} className='logo' alt='nada' /> 

      

    </div>
  )
}

export default Aboutme