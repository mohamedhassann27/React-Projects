import women1Img from '../../assets/women1.png'
import women2Img from '../../assets/women2.jpg'
import women3Img from '../../assets/women3.jpg'
import women4Img from '../../assets/women4.jpg'
import { FaStar } from "react-icons/fa";

function Products() {

    const Procucts=[
        {
            id:1,
            title:"Women Ethnic",
            color:"White",
            img:women1Img,
            rated:5,
            aosdelay:0,
        },
        {
            id:2,
            title:"Women western",
            color:"Red",
            img:women2Img,
            rated:4.5,
            aosdelay:200,
        },
        {
            id:3,
            title:"Goggles",
            color:"Brown",
            img:women3Img,
            rated:4.7,
            aosdelay:400,
        },
        {
            id:4,
            title:"Printed T-Shirt",
            color:"Yellow",
            img:women4Img,
            rated:4.4,
            aosdelay:600,
        },
        {
            id:5,
            title:"Fashin T-Shirt",
            color:"Pink",
            img:women2Img,
            rated:4.5,
            aosdelay:800,
        },
        
    ]

    return (
        <section className='container relative z-10 '>
            <div className="flex flex-col gap-2 items-center justify-center">
                <h3 data-aos='fade-up' className='text-[var(--color-primary)]'>Top Selling Products for you</h3>
                <h2 data-aos='fade-up' className='text-4xl max-sm:text-3xl font-bold'>Top Selling Products</h2>
                <p data-aos='fade-up' className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perscicates detectus archecto error noscment</p>
            </div>

            <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
                {Procucts.map((product)=>(
                    <div
                    data-aos='fade-up' data-aos-delay={product.aosdelay} key={product.id}
                    >
                        <div className="">
                            <img src={product.img} alt={product.title} className='h-[220px] w-[100%] rounded-md object-cover'/>
                        </div>
                        <div className="">
                            <h4 className='font-bold mt-2'>{product.title}</h4>
                            <p className='text-gray-600'>{product.color}</p>
                            <div className="flex items-center gap-1">
                                <FaStar className='text-yellow-500 inline-block'/>
                                <p className='inline-block text-center'>{product.rated}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div data-aos='fade-up' data-aos-delay='400' className="text-center">
                <button className='py-2 rounded-xl mt-10'>View More Products</button>
            </div>
            
        </section>
    )
}

export default Products
