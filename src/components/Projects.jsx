import React from 'react'
import Constructor from './Constructor'
import './styles/projects.css'

const Projects = () => {

  const works = [
    {
        id: 1,
        name: "Burguer",
        tecnologias: "React js css html",
        category: "web",
        img:require("../images/projects/burguer.JPG"),
        linki:"https://store-burguer.vercel.app/",
        
    },
    {
        id: 2,
        name: "Dom",
        tecnologias: "Js css html",
        category: "web",
        img:require("../images/projects/tocando.JPG"),
        linki:"https://jfj1972.github.io/clonpiano/video.html",
        
    },
    {
        id: 3,
        name: "Réplica web",
        tecnologias: "Js css html",
        category: "web",
        img:require("../images/projects/replica.JPG"),
        linki:"https://leagut.github.io/unosinr/#uno",
        
    },
    {
        id: 4,
        name: "Covimap",
        tecnologias: "Js css  html",
        category: "web",
        img:require("../images/projects/covid.JPG"),
        linki:"https://jfj1972.github.io/clonpiano/video.html",
        
    },
    {
        id: 5,
        name: "Todo List",
        tecnologias: "Js css React mongo",
        category: "web",
        img:require("../images/projects/todo.JPG"),
        linki:"https://todolisto2121.herokuapp.com/",
        
    }
  ]


  return (
    <div className='container-projects'>
      {works.map(x=>{

        return (
          <Constructor  key={x.id} name={x.name}  img={x.img} category={x.category} tecnologias={x.tecnologias} linki={x.linki} />
        

        )
        

      })} 
    </div>
  )
}

export default Projects