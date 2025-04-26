import React, { useContext, useEffect } from 'react'
import './Project.css'
import { StoreContext } from '../../context/StoreContext'
import ProjectInfo from '../../Components/ProjectInfo/ProjectInfo';
import { useParams } from 'react-router-dom';

const Project = () => {
  const {project_list} = useContext(StoreContext);
  const {projectId} = useParams();
    const project = project_list.find((e) => e._id === Number(projectId));

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  
  return (
    <div>
        <ProjectInfo project={project}/>
    </div>
  )
}

export default Project