import React from 'react'
import './styles/constructor.css'

const Constructor = (props) => {
return (
    <div className='cardd'>
        <h2>{props.name}</h2>
        <img src={props.img} alt="" className='imagen' />
        <p className='paparra'>{props.tecnologias}</p>
        <a href={props.linki} className='linkk' target="_blank" rel='noreferrer' > Ver  </a>
    </div>
)
}

export default Constructor