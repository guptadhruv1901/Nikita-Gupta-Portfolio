import React, { useState } from 'react'
import Starter from './Components/Starter/Starter'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Brief from './Components/Brief/Brief'
import Highlights from './Components/Highlights/Highlights'
import ExploreProjects from './Components/ExploreProjects/ExploreProjects'
import ProjectDisplay from './Components/ProjectDisplay/ProjectDisplay'
import Project from './Pages/Project/Project'
import Home from './Pages/Home/Home'
import Events from './Pages/Events/Events'
import About from './Pages/About/About'
import ScrollToTop from './Components/ScrollToTop'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/footer/footer'

const App = () => {
  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}>
          <Route path=':projectId' element={<Project/>}/>
        </Route>
        <Route path='/events' element={<Events/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
    
  )
}

export default App