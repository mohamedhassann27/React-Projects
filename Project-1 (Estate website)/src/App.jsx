import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer'
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
