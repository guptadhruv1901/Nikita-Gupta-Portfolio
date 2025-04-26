import React, { useState } from 'react'
import Starter from '../../Components/Starter/Starter';
import Brief from '../../Components/Brief/Brief';
import Highlights from '../../Components/Highlights/Highlights';
import ExploreProjects from '../../Components/ExploreProjects/ExploreProjects';
import ProjectDisplay from '../../Components/ProjectDisplay/ProjectDisplay';

const Home = () => {
    
    const [category, setCategory] = useState("All");

  return (
    <div>
        <Starter/>
        {/* <Brief/> */}
        <Highlights/>
        <ExploreProjects category={category} setCategory={setCategory}/>
        <ProjectDisplay category={category}/>
    </div>
  )
}

export default Home