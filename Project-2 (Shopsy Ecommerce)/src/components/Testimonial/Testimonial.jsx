import img1 from '../../assets/profile_img_1.png'
import img2 from '../../assets/profile_img_3.png'
import img3 from '../../assets/profile_img_2.png'
import Slider from "react-slick";

const testimonialData=[
    {
        id: 1,
        name: 'Victor',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at option',
        img: img1
    },
    {
        id: 2,
        name: 'Satya Nadella',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at option',
        img: img2
    },
    {
        id: 3, 
        name: 'Virat Kohli',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at option',
        img: img3
    },
    {
        id: 5,
        name: 'Sachin Tendulkar',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at option',
        img: img2
    },
    // {
    //     id: 5,
    //     name: 'Virat Kohli',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at option',
    //     img: 'https://picsum.photos/103/103'
    // },
]

function Testimonial() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
        responsive: [
            {
                breakpoint:650,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: true,
                    verticalSwiping: true,
                }
            }
        ]
    };

    const smallScreen= window.innerWidth<640

    return (
        <section className='container'>

            <div className="flex flex-col gap-2 items-center justify-center">
                <h3 data-aos='fade-up' className='text-[var(--color-primary)]'>What our customers say</h3>
                <h2 data-aos='fade-up' className='text-4xl font-bold'>Testimonial</h2>
                <p data-aos='fade-up' className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perscicates detectus archecto error noscment</p>
            </div>

            <div className="mt-10">
                <Slider {...settings}>
                    {testimonialData.map((item)=>(
                        <div>
                            <div key={item.id} data-aos={smallScreen? 'undefined': 'zoom-in'}  className='bg-primary/10 dark:bg-gray-800 mx-5 max-lg:mx-3 max-sm:my-5 py-8 px-6 rounded-xl shadow-lg relative'>
                                <img src={item.img} alt="testimonial img" />
                                <p className='mb-4 mt-6 text-gray-500'>{item.text}</p>
                                <h2 className='font-bold text-xl text-black/80 dark:text-light dark:text-white'>{item.name}</h2>
                                <span className='text-black/20 absolute top-20 right-8 text-9xl rotate-180'>،،</span>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    )
}

export default Testimonial
