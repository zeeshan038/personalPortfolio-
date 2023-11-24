import React, { useState } from 'react'
import  {projectData} from '../projectsdata'
import '../styles/projects.css'
import {AiFillGithub } from 'react-icons/ai'
import {BsSend } from 'react-icons/bs'
function Projects() {
   const [activeCat , setActiveCat]= useState('all');
   const [filterPro , setFilterPro]= useState(projectData);
  const handlePro = (category)=>{
    setActiveCat(category);
    if(category==='all'){
      setFilterPro(projectData)
    }
    else{
    const updateProject = projectData.filter((currentProject)=>{
      return  currentProject.categoray=== category;  
})  
setFilterPro(updateProject)

    }      
  }
  return (
 
      <div className='projects-main-container'>
        <div className="project-hero">
        <h5 className='Portfolio'>Portfolio</h5>
        <p className='portfoio-para'>Each project is unique piece of developement💸</p>
        </div>
       <div className="pro-btn">
          <button onClick={()=> handlePro('all')} className=  {activeCat === 'all' ? 'active':'' }  id='selective-btns'  >All</button>
          <button onClick={()=> handlePro('js')} className={activeCat=== 'js' ? 'active':''} id='selective-btns'>JavaScript</button>
          <button onClick={()=> handlePro('react')} className={activeCat ==='react'?'active':" " }id='selective-btns'>React</button>
       </div>
       <div className='projects-card-container'>
      { 
      filterPro.map((pro , index)=>{
            return <div key={index} className='project-card'>
                <img src={pro.image} alt=""  className='pro-img'/>
                <h1 className='pro-heading'>{pro.h1}</h1>
                <div className='tech-used'>
                 <p className='pro-tech'>{pro.tech1}</p>
                 <p className='pro-tech'>{pro.tech2}</p>
                 <p className='pro-tech'>{pro.tech3}</p>
                 </div>
                 <div className='pro-links'>
                <a href={pro.url} target='blank'  className='pro-anker'> <button className='pro-github'> Code <AiFillGithub className='git-icon' /></button></a>
                <a href='#' target='blank'  className='pro-anker'><button className='live-btn'>Live Demo <BsSend  className='send'/></button></a>
                </div>
            </div>
      })  
      }
      </div>
    </div>
   

  )
}

export default Projects
