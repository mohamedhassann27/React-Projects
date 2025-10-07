import { useEffect, useRef, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import NewsCard from "./NewsCard"
import Navbar from "./Header/Navbar";
import SkeletonNews from "./SkeletonNews";


function NewsList() {
    const [news, setNews]= useState([])
    const [loading,setLoading]= useState(false)
    const [error,setError]= useState("")
    const [apiDetails, setApiDetails]= useState({
        page:1,
        category: "general",
        description: ""
    })
    const apiKey= "0d92d4e2cffa4344831cc9785be0a0a2"

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                setLoading(true)
                let res= await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=7&page=${apiDetails.page}&category=${apiDetails.category}&q=${apiDetails.description}&apiKey=${apiKey}`)
                if(!res.ok){
                    throw new Error(`HTTPS Error! Status: ${res.status}`)
                }

                let data= await res.json()
                if(data.status=="error"){
                    throw new Error(data.message)
                }

                setNews(data.articles)
                setError("")

            }catch(err){
                console.log(err);
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[apiDetails])

    // console.log(news);
    
    // const filterdNews= news.filter((article)=> article.description?.toLowerCase().includes(apiDetails.description.toLowerCase()))

    const contRef= useRef(null)
    const handlePrevious= ()=>{
        if(apiDetails.page>1){
            setApiDetails({...apiDetails, page:apiDetails.page-1})
            contRef.current.scrollIntoView()
        }
    }
    const handleNext= ()=>{
            setApiDetails({...apiDetails, page:apiDetails.page+1})
            contRef.current.scrollIntoView()
    }

    return (
        <>
            <Navbar setApiDetails={setApiDetails} apiDetails={apiDetails}/>

            <div className="p-2" ref={contRef}>
                {!news.length &&
                    <div className="flex flex-col justify-center items-center w-full min-h-[70vh] gap-2">
                        {/* {loading&& <CircularProgress disableShrink />} */}
                        {loading&& Array.from({length:5}).map((_,i)=> <SkeletonNews key={i}/>) }
                        {error && <p className=" text-3xl">{error}</p>}
                        {(!error && (news.length==0 && !loading)) && <p className="absolute top-1/2 left-1/2 text-3xl -translate-1/2">No results Found</p>}
                    </div>
                }

                {
                news.map((article)=> (
                    <a href={article.url} target="_blank"  key={article.title}>
                        <NewsCard article={article}/>
                    </a>
                ))
                }

                <div className="flex justify-around px-5 my-5">
                    {apiDetails.page>1 && <button className="py-2 px-4 bg-indigo-700 text-white rounded-sm cursor-pointer mr-auto "  onClick={handlePrevious} >Previous</button> }
                    
                    <button className="py-2 px-4 bg-indigo-700 text-white rounded-sm cursor-pointer ml-auto" onClick={handleNext}>Next</button>
                </div>
            </div>
        </>
    )
}

export default NewsList
