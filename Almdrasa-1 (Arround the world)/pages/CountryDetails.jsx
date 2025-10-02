import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { FaArrowLeft } from "react-icons/fa6";

function CountryDetails() {
    const {name}= useParams()
    const [country, setCountry]= useState(null)
    const [isLoading, setIsLoading]= useState(false)
    const [isError, setIsError]= useState(false)

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                setIsLoading(true)
                setIsError(false)
                let res= await fetch(`https://restcountries.com/v3.1/name/${name}`)
                if(!res.ok){
                    throw new Error("Country name is invaled")
                }
                let data= await res.json()
                setCountry(data[0])
                // console.log(data[0]);
            }catch(err){
                // console.log(err);
                setIsError(true)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData()
    },[name])
    return (
        
        <section className='max-w-7xl mx-auto min-h-[91vh] dark:bg-gray-900 flex  flex-col dark:text-white'>

            <Link to="/" className='bg-white text-black rounded-md shadow-sm items-start w-fit py-2 px-3 mt-10 max-md:ml-10'> <FaArrowLeft></FaArrowLeft> </Link>

            {isLoading && <p className='text-3xl absolute top-1/2 left-1/2'>Loading...</p>}

            {isError && <p className='text-3xl absolute top-1/2 left-1/2'>Country Name Is Invalid</p>}

            {country &&
                <div className="flex flex-1 gap-25 max-md:gap-10 max-md:flex-col py-15 ">
                    <div className="flex-1 mx-auto">
                        <img src={country.flags.svg} alt="country img" className='flex-1 w-fit max-md:w-[90%] mx-auto rounded-xl h-100 max-md:h-70 max-h-full'/>
                    </div>

                    <div className="flex max-md:flex-col flex-1 w-full justify-between">
                        <div className="flex-1 mx-auto max-md:mx-1 flex flex-col max-md:px-10 gap-1 py-6">
                            <h1 className='text-2xl font-bold mb-4 '>{country.name.common}</h1>
                            <p> <span className='font-semibold'>Native Name:</span> {country.name.official}</p>
                            <p> <span className='font-semibold '>Population:</span> {parseInt(country.population).toLocaleString()}</p>
                            <p><span className='font-semibold'>Region:</span> {country.region}</p>
                            <p> <span className='font-semibold'>Sub Region:</span> {country.subregion}</p>
                            <p> <span className='font-semibold'>Capital:</span>{country.capital}</p>
                        </div>
                        <div className="flex-1 py-19 max-md:py-5 flex flex-col gap-1 md:ml-10 max-md:px-11">
                            <p><span className='font-semibold'>Top Level Domain:</span> {country.altSpellings[0]}</p>
                            <p><span className='font-semibold'>Currencies:</span> {Object.values(country.currencies)[0].name} {Object.values(country.currencies)[0].symbol}</p>
                            <p><span className='font-semibold'>Languages:</span> {Object.values(country.languages)[0]}</p>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default CountryDetails
