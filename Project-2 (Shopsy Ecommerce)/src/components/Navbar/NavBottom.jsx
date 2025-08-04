import { useState } from "react"
import { FaCaretDown } from "react-icons/fa";

function NavBottom() {
    const [displayItems,setDisplayItems]=useState(false)
    return (
        <div className="shadow-xl p-3 bg-white dark:bg-gray-900 z-10 relative">
            <ul className="flex justify-center text-md gap-10 max-sm:gap-8 ">
                <li><a href="#">Home</a></li>
                <li><a href="#">Top Rated</a></li>
                <li className="max-sm:hidden"><a href="#" >Kids Wear</a></li>
                <li className="max-sm:hidden"><a href="#">Mens Wear</a></li>
                <li className="max-sm:hidden"><a href="#">Electronics</a></li>
                <li className="relative">
                    <a href="#" onClick={()=>setDisplayItems(prev=> !prev)}>Trending items</a>
                    <ul className={`${displayItems?"block":"hidden"} absolute top-9 bg-white rounded-xl px-4 py-3 w-38`}>
                        <li><a href="#">Trending Books</a></li>
                        <li className="my-4"><a href="#">Best selling</a></li>
                        <li><a href="#">Authors</a></li>
                    </ul>
                    <FaCaretDown className="absolute cursor-pointer -right-4 top-1.5" onClick={()=>setDisplayItems(prev=> !prev)}/>
                </li>
            </ul>
        </div>
    )
}

export default NavBottom
