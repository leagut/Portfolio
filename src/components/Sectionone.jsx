import React from 'react'
import './styles/sectionone.css'
import { NavLink } from 'react-router-dom'

const Sectionone = () => {
  return (
    <div className='container2'>
        <div class="wrapper">
            <div class="neon-wrapper">
                <span class="txt">&#123;L&#125;</span>
                <span class="gradient"></span>
                <span class="dodge"></span>
            </div>
        </div>
        <div className='bottons'>
            <ul>
              <li> <NavLink className={({isActive}) => isActive ? 'active' : 'desactive'} to='/Aboutme'>Sobre mi</NavLink> </li>
              <li> <NavLink className={({isActive}) => isActive ? 'active' : 'desactive'} to='/Tecnologies'>Tecnologias</NavLink> </li>
              <li> <NavLink className={({isActive}) => isActive ? 'active' : 'desactive'} to='/Projects'>Proyectos</NavLink> </li>
            </ul>
        </div>
    
    </div>
  )
}

export default Sectionone