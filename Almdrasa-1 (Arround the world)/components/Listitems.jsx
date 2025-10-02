import { useEffect, useState } from "react";
import Filter from "./Filter";
import { data, useNavigate } from "react-router";
import { HiH2 } from "react-icons/hi2";

function Listitems() {
    const [countries, setCountries]= useState([])
    const [searchValue, setSearchValue]= useState("")
    const [selectValue, setSelectValue]= useState("All")
    const navigate= useNavigate()
    const [isLoading, setIsLoading]= useState(false)
    const [isError, setIsError]= useState(false)

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                setIsLoading(true)
                let res= await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital")
                let data= await res.json()
                setCountries(data)
                // setLoading(false)
                // console.log(data);
            }catch(err){
                console.log(err);
                setIsError(true)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData()
    },[])

    const filteredCountries= countries.filter((country)=> country.name.common.toLowerCase().includes(searchValue.toLowerCase()) && (selectValue=="All"? true: country.region==selectValue));
    
    return (
        
        <section className="max-w-7xl mx-auto my-10 max-lg:px-4">

            <Filter searchValue={searchValue} setSearchValue={setSearchValue} selectValue={selectValue} setSelectValue={setSelectValue}/>

            {isLoading&& <h2 className="text-3xl absolute top-1/2 left-1/2 text-black dark:text-white">Loading....</h2>}

            {isError&& <h2 className="text-3xl absolute top-1/2 left-1/2 text-black dark:text-white">Somthing Went Error</h2>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-6 ">

                {!isLoading && !isError &&(filteredCountries.length==0 ? <p className="absolute top-1/2 left-1/2 text-3xl">No Results Found</p>: filteredCountries.map((country,i)=>(
                    <div key={i} className="p-4 pb-6 rounded-xl shadow-md bg-white text-black cursor-pointer" onClick={ ()=>navigate(`countries/${country.name.common}`)}>
                        <img src={country.flags.svg} alt={country.flags.alt} className="w-full h-45 rounded-lg"/>
                        <h1 className="my-3 text-lg font-semibold">{country.name.common}</h1>
                        <p>Population: {parseInt(country.population).toLocaleString()}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                )))}

            </div>


        </section>
    )
}

export default Listitems
