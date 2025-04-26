import React from 'react'
import './ProjectInfo.css'

const ProjectInfo = (props) => {
    const {project} = props;
  return (
    <div>
        <img className='img' src={project.mainImg} alt="" />
        <div className="project-info">
          <h1 className='title'>{project.name}</h1>
          <div className="horizotal">
            <div className="vertical">
              <h1 className='sub-head'>Project Type</h1>
              <h2 className='data'>{project.category}</h2>
            </div>
            <div className="vertical">
              <h1 className='sub-head'>Project Output</h1>
              <h2 className='data'>{project.output}</h2>
            </div>
            
          </div>
          <h1 className='sub-head'>About the Project</h1>
          <p className='data'>{project.description}</p>
          <hr />
        </div>
        {
            project.projectFormat.map((item,index)=>{
                return <img className='img' src={item.image} alt="" />
            })
        }
    </div>
  )
}

export default ProjectInfo