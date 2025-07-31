import React from 'react'
import aboutImg from "../assets/brand_img.png"
import { motion } from "motion/react"

export default function About() {
    return (

        <motion.div
        initial={{opacity:0,x:200}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        >

        <section 
        id='About' className='overflow-x-hidden my-12 px-32 max-md:px-10 max-xl:px-13 py-10'>
            <h2 className='text-4xl font-bold text-center'>About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span></h2>
            <p className='my-3 mb-10 text-center max-w-sm mx-auto text-gray-800'>Passionate About Properties, Dedicated to Your Vision</p>

            <div className="flex gap-15 flex-1 max-md:flex-col">
                <div className="max-w-[100%] flex-1">
                    <img src={aboutImg} alt="aboutImg" className='w-120 mx-auto h-full' />
                </div>
                <div className="flex-1 flex flex-col pt-7">
                    <div className="grid grid-cols-2 gap-y-8">
                        <div>
                            <h3 className='text-4xl text-gray-800'>10+</h3>
                            <p>Years Of Excellence</p>
                        </div>
                        <div>
                            <h3 className='text-4xl text-gray-800'>12+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <h3 className='text-4xl text-gray-800'>20+</h3>
                            <p>Mn. Sq. Ft. Dellvered</p>
                        </div>
                        <div>
                            <h3 className='text-4xl text-gray-800'>25+</h3>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>
                    
                    <p className='my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque minima voluptatum quas sapiente veritatis, ipsam excepturi necessitatibus sed sint perferendis explicabo! Repellat at saepe nemo aspernatur accusamus nulla eveniet.</p>
                    <button className='py-2 px-8 text-white bg-blue-600 rounded w-fit cursor-pointer'>Learn More</button>
                </div>
            </div>
        </section>
        </motion.div>
    )
}
