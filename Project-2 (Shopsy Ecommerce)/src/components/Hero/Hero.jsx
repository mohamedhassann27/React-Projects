import shoppingImg from '../../assets/shopping.png'
import womenImg from '../../assets/women.png'
import saleImg from '../../assets/sale.png'
// React Slick
import Slider from "react-slick";

import showPopus from '../Popus/popus';


function Hero() {

    const imageList=[
        {
            title: "Up to 50% off on all Men's Wear",
            description: "Lorem His life will forever be Changed dolor sit amet. consectetur adipiscing elit. sed to oiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: shoppingImg,
        },
        {
            title: "30% off on all Women's Wear",
            description: ">Lorem His life will forever be Changed dolor sit amet. consectetur adipiscing elit. sed to oiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: womenImg,
        },
        {
            title: "70% off on all Products Sale",
            description: "Lorem His life will forever be Changed dolor sit amet. consectetur adipiscing elit. sed to oiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: saleImg,
        }
    ]
    // React Slick Setting
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
        slidesToShow: 1,
    };

    

    return (
            <section className=' container max-sm:px-8 overflow-x-hidden bg-gray-100 dark:bg-gray-950 relative'>

                <div className="bg-amber-200 dark:bg-primary/40 w-[700px] h-[700px] absolute rounded-2xl rotate-45 right-10 bottom-80 z-0 overflow-x-hidden">
                </div>

                <Slider {...settings}>
                    {imageList.map((item)=>(
                        <div>
                            <div className="flex max-sm:flex-col justify-between flex-1 items-center gap-10l h-[520px] max-lg:h-[100%] w-[100%] overflow-hidden">
                                <div className="flex-1">
                                    <h2
                                        data-aos='zoom-out' 
                                        data-aos-durtion='500' 
                                        data-aos-once='true' 
                                        className='font-bold text-7xl max-sm:text-5xl'
                                    >{item.title}</h2>
                                    <p 
                                        data-aos='fade-up' 
                                        data-aos-durtion='100' 
                                        data-aos-delay='100' 
                                        className='my-5'
                                    >{item.description}</p>
                                    <button
                                        data-aos='fade-up' 
                                        data-aos-durtion='500' 
                                        data-aos-delay='300' 
                                        className='bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondry)] rounded-3xl py-2'
                                        onClick={showPopus}
                                    >Order Now</button>
                                </div>
                                <div
                                    data-aos='zoom-in'
                                    data-aos-once='true'
                                    className="flex-1"
                                >
                                    <img src={item.img} alt="shopping img" className='mx-auto' width={450} height={450}/>
                                </div>
                        </div>
                    </div>
                ))}                    
                    {/* <div>
                        <div className="flex justify-between flex-1 items-center gap-10 h-[520px]">
                            <div className="flex-1">
                                <h2
                                    data-aos='zoom-out' 
                                    data-aos-durtion='500' 
                                    data-aos-once='true' 
                                    className='font-bold text-7xl'
                                >Up to 50% off on all Men's Wear</h2>
                                <p 
                                    data-aos='fade-up' 
                                    data-aos-durtion='100' 
                                    data-aos-delay='100' 
                                    className='my-5'
                                >Lorem His life will forever be Changed dolor sit amet. consectetur adipiscing elit. sed to oiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button
                                    data-aos='fade-up' 
                                    data-aos-durtion='500' 
                                    data-aos-delay='300' 
                                    className='bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondry)] rounded-3xl'
                                >Order Now</button>
                            </div>
                            <div
                                data-aos='zoom-in'
                                data-aos-once='true'
                                className="flex-1"
                            >
                                <img src={shoppingImg} alt="shopping img" className='mx-auto' width={450} height={450}/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between flex-1 items-center gap-10 py-15">
                            <div className="flex-1">
                                <h2 className='font-bold text-7xl'>30% off on all Women's Wear</h2>
                                <p className='my-5'>Lorem His life will forever be Changed dolor sit amet. consectetur adipiscing elit. sed to oiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button className='bg-amber-300 rounded-3xl'>Order Now</button>
                            </div>
                            <div className="flex-1">
                                <img src={womenImg} alt="women img" className='mx-auto' width={450} height={450}/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between flex-1 items-center gap-10 py-15">
                            <div className="flex-1">
                                <h2 className='font-bold text-7xl'>70% off on all Products Sale</h2>
                                <p className='my-5'>Lorem His life will forever be Changed dolor sit amet. consectetur adipiscing elit. sed to oiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button className='bg-amber-300 rounded-3xl'>Order Now</button>
                            </div>
                            <div className="flex-1">
                                <img src={saleImg} alt="sale img" className='mx-auto' width={450} height={450}/>
                            </div>
                        </div>
                    </div> */}
                </Slider>

            </section>

    )
}

export default Hero
