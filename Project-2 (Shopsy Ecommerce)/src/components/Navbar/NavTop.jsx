import logo from"../../assets/logo.png"
import lightModeButton from"../../assets/light-mode-button.png"
import darkModeButton from"../../assets/dark-mode-button.png"
import { IoMdSearch } from "react-icons/io";
import { useState } from "react"
import { FaCartShopping } from "react-icons/fa6";

import showPopus from "../Popus/popus";

function NavTop() {
    const [modeImg,setModeImg]=useState(lightModeButton);
    const htmlElement=document.documentElement
    const modeHandler=()=>{
        setModeImg(modeImg==lightModeButton?darkModeButton:lightModeButton);
        htmlElement.classList.toggle('dark')
    }

    return(
        <div className="bg-amber-200 flex justify-between py-3 px-25 max-sm:px-5 max-lg:px-12 z-[10] relative overflow-x-hidden dark:bg-primary/40">

            <div className="flex items-center text-center gap-2">
                <img src={logo} alt="logo"  className="w-15 max-sm:w-13"/>
                <h1 className="text-center text-black font-bold text-4xl max-sm:text-3xl dark:text-white">Shopsy</h1>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative max-sm:hidden">
                    <input type="search" name="search" id="" placeholder="Search" className="bg-white py-1 px-3 text-black rounded-full w-60 hover:w-80 transition-all duration-300"/>
                    <IoMdSearch className="absolute right-5 top-1.5 text-xl text-gray-600" />
                </div>
                
                <button className="bg-[var(--color-primary)] rounded-full flex items-center gap-2 group transition-all duration-700 py-2" onClick={showPopus}>
                    <span className="hidden group-hover:block transition-all duration-300">Order</span>
                    <FaCartShopping className="w-6"/>
                </button>
                <img src={modeImg} onClick={modeHandler} alt="light button" className="cursor-pointer w-15 transition-all duration-300 drop-shadow-2xl"/>
            </div>
        </div>
    )
}

export default NavTop
