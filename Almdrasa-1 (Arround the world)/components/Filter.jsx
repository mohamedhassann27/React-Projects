import { useState } from "react"
import { CiSearch } from "react-icons/ci";

function Filter({searchValue, setSearchValue, selectValue, setSelectValue}) {
    
    return (
        <div className="flex justify-between">
            <div className="relative rounded-full w-[50%] md:w-[30%] shadow-md dark:text-white">
                <input type="text" placeholder="Search for a country..." className="rounded-full px-12 py-2 w-full dark:text-white dark:border dark:border-white border-transparent focus:outline-gray-400" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                <CiSearch className="absolute left-4 top-2.5 text-xl font-bold"/>
            </div>

            <select name="region" id="region" className="px-4 py-2 shadow-md  dark:bg-gray-900 dark:text-white dark:border dark:border-white" value={selectValue} onChange={(e)=>setSelectValue(e.target.value)}>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Filter
