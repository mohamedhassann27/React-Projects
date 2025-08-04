import rightArrow from "../assets/right_arrow.svg"
import leftArrow from "../assets/left_arrow.svg"
import {assets,projectsData} from '../assets/assets'
import { motion } from 'motion/react'

const Projects = () => {

    const nextProject=()=>{
        const projects=document.querySelector(".projects")
        projects.scrollLeft+=325;
    }
    const prevProject=()=>{
        const projects=document.querySelector(".projects")
        projects.scrollLeft-=325;
    }
    return (
        <motion.div
        initial={{opacity:0, x:-200}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        >

        <section className='my-12 px-32 max-md:px-10 max-xl:px-13 py-12 overflow-x-hidden' id='Projects'>
            <h2 className='text-4xl font-bold text-center'>Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span></h2>
            <p className='my-3 mb-10 max-w-sm mx-auto text-center text-gray-600'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

            <div className="flex gap-5 justify-end mb-6">
                <button onClick={prevProject}><img src={leftArrow} className='bg-gray-200 py-2 px-3 cursor-pointer' alt="leftAroow"/></button>
                <button onClick={nextProject}><img src={assets.right_arrow} className='bg-gray-200 py-2 px-3 cursor-pointer' alt="rightAroow"/></button>
            </div>

            <div className=" projects flex gap-8 transition-transform overflow-x-scroll" style={{scrollbarWidth:"none"}}>
                {projectsData.map((project, index)=>(
                    <div key={index} className=' flex-shrink-0 w-1/4 max-sm:w-full max-lg:w-1/2 relative'>
                        <img src={project.image} alt={project.title}/>
                        <div className="bg-white shadow-xl py-2 px-3 w-[85%] mx-auto -translate-y-7 z-10">
                            <h3 className='text-xl font-bold'>{project.title}</h3>
                            <p className='text-gray-700'>{project.price} | {project.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </motion.div>
    )
}

export default Projects
