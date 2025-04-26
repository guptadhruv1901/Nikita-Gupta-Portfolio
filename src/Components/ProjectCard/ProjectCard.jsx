import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'

const ProjectCard = ({id,name,coverimage,description}) => {
  return (
    <div className='project-card'>
      
        <img className='card-img' src={coverimage} alt="" />
        <div className="card-color">
        <div className="card-data">
            <h2 className="card-name">{name}</h2>
            <span className="card-description">{description}</span>
          <Link to={`/project/${id}`}><a className="card-button">Read More</a></Link>  
        </div>
          
        </div>
    </div>
  )
}

export default ProjectCard