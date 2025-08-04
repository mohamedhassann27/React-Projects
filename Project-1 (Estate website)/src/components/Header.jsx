import Navbar from './Navbar'
import { motion } from "motion/react"


const Header = () => {
    return (
        <section id='Home' className='min-h-screen overflow-x-hidden w-full bg-cover bg-center flex items-center justify-center text-white' style={{backgroundImage: "url('header_img.png')"}}>
            <Navbar/>

            <div className="px-32 max-md:px-10 py-14 flex items-center justify-center text-center mt-12 ">
                {/* motion api */}
            <motion.div
            initial={{opacity:0, y:100}}
            transition={{duration:1.5}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className='mt-5'>
                <h1 className='text-7xl max-sm:text-5xl max-lg:text-6xl text-center font-semibold max-w-180'> Explore homes that fit your dreams</h1>

                <div className="space-x-5 mt-20">
                <a href="#Projects" className='border py-3 px-6 rounded hover:bg-blue-500 hover:border-0 transition'>Projects</a>
                <a href="#Contact" className=' py-3 px-6 rounded bg-blue-500 hover:bg-transparent hover:border transition'>Contact Us</a>
                </div>
            </motion.div>
            </div>
        </section>
    )
}

export default Header
