import React from 'react'
import html from './styles/tecnologies.css'

import bootstrap from'../images/im/bootstrap-logo.png'
import figma  from'../images/im/figma.png'
import git from'../images/im/git.png'
import github from'../images/im/github.png'
import html2 from'../images/im/Html5_diseño_web-1.png'
import js from'../images/im/js.png'
import css from'../images/im/logo-2582747_1280.webp'
import react from'../images/im/medal-react.png'
import mongo from'../images/im/mongodb.png'
import mysql from'../images/im/msq2.png'
import node from'../images/im/node.jpg'
import taild  from '../images/im/Tailwind-img.png'
import ux from'../images/im/uiux-img1.png'

const Tecnologies = () => {
  return (
    <div className='container-tecnologies'>
      <img src={bootstrap} alt="" className='size' />
      <img src={figma} alt="" className='size' />
      <img src={git} alt=""  className='size'/>
      <img src={github} alt=""  className='size'/>
      <img src={html2} alt="" className='size' />
      <img src={js} alt=""  className='size'/>
      <img src={css} alt="" className='size' />
      <img src={react} alt="" className='size' />
      <img src={mongo} alt="" className='size' />
      <img src={mysql} alt=""  className='size'/>
      <img src={node} alt="" className='size' />
      <img src={taild} alt=""  className='size'/>
      <img src={ux} alt=""  className='size'/>
    </div>
  )
}

export default Tecnologies