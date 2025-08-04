import logo from '../../assets/logo.png'
import footerPattern from '../../assets/footer-pattern.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";

function Footer() {
    return (
        <footer className='py-[50px] px-[100px] max-lg:px-12 pb-50 flex  flex-1 max-lg:justify-between text-white  bg-cover bg-bottom max-sm:flex-col max-sm:gap-7' style={{backgroundImage:`url(${footerPattern})`}}> 

            <div className="flex-1 px-10 max-lg:px-0">
                <div className=" flex items-center gap-3 mb-5">
                    <img src={logo} alt="logo" className='w-13'/>
                    <h2 className='font-bold text-4xl'>Shopsy</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amel consecterur adipisicing elit. Possimus, voluptate.</p>
            </div>

            <div className="flex-1 mx-20 max-sm:mx-0 max-lg:px-0 max-lg:mx-0 max-lg:ml-20">
                <h3 className='font-bold text-2xl mb-5'>Important Links</h3>
                <ul className='flex flex-col gap-3 text-gray-400'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>

            <div className="flex-1 mx-10 max-lg:mx-0">
                <h3 className='font-bold text-2xl mb-5'>Links</h3>
                <ul className='flex flex-col gap-3 text-gray-400'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>

            <div className="flex-1 mx-10 max-lg:mx-0">
                <div className="flex gap-3 mb-5">
                    <FaLinkedin className='font-bold text-2xl'/>
                    <FaFacebook className='font-bold text-2xl'/>
                    <FaInstagram className='font-bold text-2xl'/>
                </div>
                <div className="flex gap-2 items-center">
                    <FaLocationArrow className='text-xl'/>
                    <p>Egypt, Zagazig</p>   
                </div>
                <div className="flex gap-2 items-center mt-4">
                    <IoIosPhonePortrait className='text-xl'/>
                    <p>+201278256598</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
