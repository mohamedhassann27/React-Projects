import bannerImg from '../../assets/women2.jpg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
    return (
        <section className='container flex flex-1 max-sm:flex-col gap-10'>
            <div data-aos='zoom-in' className="flex-1 px-5">
                <img className='max-w-[600px] w-[100%] h-[350px] m-auto rounded-md drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' src={bannerImg} alt="banner img"/>
            </div>
            <div className="flex-1 flex gap-5 flex-col">
                <h2 data-aos='fade-up' className='text-3xl font-bold'>Winter Sale Up To 50% Off</h2>
                <p data-aos='fade-up' className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, distinctio impedit velit molestias quibusdam optio.</p>
                <div className="flex flex-col gap-5 mt-2">
                    <div data-aos='fade-up' className="flex gap-5 items-center">
                        <GrSecure className='text-4xl bg-violet-100 dark:bg-violet-400 rounded-full h-12 w-12 p-3.5 shadow-sm'/>
                        <span>Quality Products</span>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='150' className="flex gap-5">
                        <IoFastFood className='text-4xl bg-orange-100 dark:bg-orange-400 rounded-full h-12 w-12 p-3.5 shadow-sm'/>
                        <span>Fast Delivery</span>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='200' className="flex gap-5">
                        <GiFoodTruck className='text-4xl bg-green-100 dark:bg-green-400 rounded-full h-12 w-12 p-3.5 shadow-sm'/>
                        <span>Easy Payment method</span>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='250' className="flex gap-5">
                        <GiFoodTruck className='text-4xl bg-yellow-100 dark:bg-yellow-400 rounded-full h-12 w-12 p-3.5 shadow-sm'/>
                        <span>Get Offers</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
