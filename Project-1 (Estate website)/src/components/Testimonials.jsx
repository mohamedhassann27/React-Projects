import React from 'react'
import { testimonialsData } from '../assets/assets'
import starIcon from "../assets/star_icon.svg"
import { motion } from 'motion/react'

const Testimonials = () => {
    return (
        <motion.div
        initial={{opacity:0, x:200}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        >

        <section className='overflow-x-hidden my-12 px-32 max-md:px-10 max-xl:px-13 py-10'>
            <h2 className='text-4xl font-bold text-center'>Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span></h2>
            <p className='my-4 mb-11 mx-auto max-w-85 text-center text-gray-600'>Real Stories from Those Who Found Home With Us</p>
            <div className="flex max-lg:flex-col max-md:max-w-full gap-8 items-center justify-center">
                {testimonialsData.map((item,index)=>(
                    <div key={index} className="max-w-[340px] flex flex-col items-center justify-center text-center 0 px-8 py-10 rounded shadow-lg border border-gray-100">
                        <img src={item.image} alt={item.title} className='w-20 h-20'/>
                        <h3 className='mt-4 text-2xl'>{item.name}</h3>
                        <p className='text-gray-600'>{item.title}</p>
                        <div className="flex gap-2 my-3">
                            {Array.from({length: item.rating}).map((_,i)=>(
                                <img key={i} src={starIcon} alt="" />
                            ))}
                        </div>
                        <p className='text-gray-600'>{item.text}</p>
                    </div>
                ))}
            </div>
            
        </section>
        </motion.div>
    )
}

export default Testimonials
