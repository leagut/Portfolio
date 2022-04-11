import React from 'react'
import html from './styles/tecnologies.css'

import {AiOutlineHtml5} from 'react-icons/ai'
import {FaCss3Alt,FaReact} from 'react-icons/fa'
import {SiJavascript,SiMongodb,SiFigma,SiTailwindcss} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {DiGit} from 'react-icons/di'
import {GrMysql} from 'react-icons/gr'
import {BsBootstrapFill} from 'react-icons/bs'








const Tecnologies = () => {
  return (
    <div className='container-tecnologies'>
      <AiOutlineHtml5 className='iconn    size'/>
      <FaCss3Alt className='iconn   size'/>
      <SiJavascript className='iconn    size'/>
      <FaReact className='iconn   size'/>
      <SiMongodb className='iconn   size'/>
      <SiFigma className='iconn   size'/>
      <BsGithub className='iconn    size'/>
      <DiGit className='iconn   size'/>
      <GrMysql className='iconn   size'/>
      <SiTailwindcss className='iconn   size'/>
      <BsBootstrapFill className='iconn   size'/>
      
    </div>
  )
}

export default Tecnologies