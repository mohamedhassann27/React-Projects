import React, { useEffect, useState } from 'react'
// import { assets } from '../assets/assets'
import logo from "../assets/logo.svg"
import menuIcon from "../assets/menu_icon.svg"
import crossIcon from "../assets/cross_icon.svg"
import { Link } from 'react-router'

const Navbar = () => {
    const [showMenu,setShowMenu]=useState(false)
    
    useEffect(()=>{
        if(showMenu){
            document.body.style.overflow="hidden"
        }else{
            document.body.style.overflow="auto"
        }
        return ()=>{
            document.body.style.overflow="auto"
        }
    },[showMenu])
    return (
        <nav className='absolute top-0 left-0 w-full bg-transparent px-32 py-4 max-lg:px-13 max-md:px-10 flex justify-between items-center overflow-x-hidden'>
            <div className=''>
                <img src={logo} alt="logo" />
            </div>

            <ul className='flex gap-8 max-md:hidden'>
                <li className='hover:text-gray-400 cursor-pointer text-[17px]'><Link to="/">Home</Link></li>
                <li className='hover:text-gray-400 cursor-pointer text-[17px]'><Link to={"about"}>About</Link></li>
                <li className='hover:text-gray-400 cursor-pointer text-[17px]'><Link to={"projects"}>Projects</Link></li>
                <li className='hover:text-gray-400 cursor-pointer text-[17px]'><Link to={"testimonials"}>Testimonials</Link></li>
            </ul>

            <button className='bg-white py-2 px-8 rounded-full cursor-pointer text-black max-md:hidden'>
                Sign Up
            </button>

            <img src={menuIcon} alt="menu icon" className='hidden max-md:block w-7 cursor-pointer' onClick={()=>setShowMenu(true)}/>

            {/* mobile menu */}
            <div className={`${showMenu? "block": "hidden"} bg-white md:hidden fixed top-0 left-0 bottom-0 min-h-screen w-full`}>
                <div className="flex justify-end px-10 py-6">
                    <img src={crossIcon} alt="crossIcon" className='w-6 cursor-pointer' onClick={()=>setShowMenu(false)}/>
                </div>
                <ul className='flex flex-col items-center py-6 gap-8 text-black'>
                    <li className='hover:text-gray-400 cursor-pointer text-[17px]l'><a href="#Home" onClick={()=>setShowMenu(false)}>Home</a></li>
                    <li className='hover:text-gray-400 cursor-pointer text-[17px]'><a href="#About" onClick={()=>setShowMenu(false)}>About</a></li>
                    <li className='hover:text-gray-400 cursor-pointer text-[17px]'><a href="#Projects" onClick={()=>setShowMenu(false)}>Projects</a></li>
                    <li className='hover:text-gray-400 cursor-pointer text-[17px]'><a href="#Testimonials" onClick={()=>setShowMenu(false)}>testimonials</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default   Navbar 
