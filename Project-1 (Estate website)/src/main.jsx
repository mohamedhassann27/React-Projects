import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import Testimonials from './components/Testimonials.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='projects' element={<Projects/>}></Route>
        <Route path='testimonials' element={<Testimonials/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
