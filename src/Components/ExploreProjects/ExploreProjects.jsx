import React from 'react'
import "./ExploreProjects.css"
import { menu_list } from "../../assets/assets"

const ExploreProjects = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-project'>
        <h1>Projects</h1>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
            
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <p className={category===item.menu_name?"active":""}>{item.menu_name}</p>
                        <p className={index<3?"sep":"display"}>|</p>
                    </div>
                )
            })
            }
        </div>   
        <hr />
    </div>
  )
}

export default ExploreProjects