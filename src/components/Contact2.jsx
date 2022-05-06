import React from 'react'
import './styles/contact2.css'
import {FaLinkedin,FaWhatsapp} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const Contact2 = () => {
  return (
    <div className='contact22'>
        
        
        <a href="https://www.linkedin.com/in/leandro-s21/" target="_blank" rel='noreferrer'> <FaLinkedin className='ici2'/> </a>
        <a href="https://github.com/leagut" target="_blank" rel='noreferrer'> <BsGithub className='ici2'/> </a>
         <a href="https://api.whatsapp.com/send/?phone=573186834366&text=+Hola%21+Acabo+de+ver+tu+portafolio...&app_absent=0" target="_blank" rel='noreferrer'> <FaWhatsapp className='ici2'/> </a> 
    </div>
  )
}

export default Contact2