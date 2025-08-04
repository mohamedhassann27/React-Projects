import React from 'react'
import darkLogo from "../assets/logo_dark.svg"
const Footer = () => {
    return (
        <footer className='py-8 px-32 flex justify-between gap-10 bg-gray-900 text-white overflow-x-hidden max-sm:flex-col max-sm:px-10'>
            <div className="w-1/3 max-sm:w-1/1">
                <img src={darkLogo} alt="dark logo" />
                <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium hic in ex nesciunt, molestias deserunt deleniti itaque sint iste dignissimos nulla error, suscipit expedita dolorum provident voluptas fugiat? Minima?</p>
            </div>
            <div className="w-1/5 max-sm:w-1/1">
                <h3 className='text-xl'>Company</h3>
                <ul className='flex flex-col mt-4 gap-2'>
                    <li className='text-gray-400'><a href="#Home">Home</a></li>
                    <li className='text-gray-400'><a href="#About">About US</a></li>
                    <li className='text-gray-400'><a href="#Contact">Contact Us</a></li>
                    <li className='text-gray-400'><a href="#Privacy">Privacy policy</a></li>
                </ul>
            </div>
            <div className="w-1/3 max-sm:w-1/1">
                <h3 className='text-xl'>Subscribe to our newsletter</h3>
                <p className='my-4 text-gray-400'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className="flex gap-2">
                    <input type="text" placeholder='Enter your email' className='p-2 bg-gray-800 flex-1 rounded'/>
                    <button className='bg-blue-600 p-3 rounded'>Subscribe</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
