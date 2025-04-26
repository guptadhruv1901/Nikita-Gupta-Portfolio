import React, { useContext } from 'react'
import './ProjectDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectDisplay = ({category}) => {
    const {project_list} = useContext(StoreContext)

    
  return (
    <div className='project-display' id='project-display'>
      <div className='project-display-list'>
        {
          project_list.map((item,index)=>{
            if(category==='All'||category===item.category){
              return <ProjectCard key={index} id={item._id} name={item.name} coverimage={item.coverImage} description={item.category}  />
            }
          })
        }
      </div>
    </div>
  )
}

export default ProjectDisplay