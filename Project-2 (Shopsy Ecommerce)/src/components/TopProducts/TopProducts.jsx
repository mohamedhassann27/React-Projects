import { FaStar } from 'react-icons/fa6'
import shirt1 from '../../assets/shirt.png'
import shirt2 from '../../assets/shirt2.png'
import shirt3 from '../../assets/shirt3.png'

function TopProducts() {

    const topProducts=[
        {
            id:1,
            title: 'Casual Wear',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dolores.',
            img: shirt1
        },
        {
            id:2,
            title: 'Printed Shirt',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dolores.',
            img: shirt2
        },
        {
            id:3,
            title: 'Women Shirt',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dolores.',
            img: shirt3
        },
    ]

    return (
        <section className="container">
            <div className="flex flex-col gap-2 justify-center">
                <p data-aos='fade-up' className='text-[var(--color-primary)]'>Top Rated Products for you</p>
                <p data-aos='fade-up' className='text-4xl max-sm:text-3xl font-bold'>Top Rated Products</p>
                <p data-aos='fade-up' className='text-gray-400 w-120 max-sm:w-[100%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 max-lg:gap-6 max-sm:gap-30 items-center justify-center mt-24">
                {topProducts.map((product)=>(
                    <div key={product.id} data-aos='zoom-in' className="group bg-white shadow-xl dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover :text-white transition-all duration-400 text-center rounded-3xl h-85 max-sm:h-92 max-lg:h-96 max-2xl:h-90 px-4 max-w-[400px] m-auto">

                        <div className="w-50 m-auto -translate-y-20 hover:scale-105 transition-all duration-300 drop-shadow-md">
                            <img src={product.img} alt={product.title}/>
                        </div>

                        <div className="-translate-y-20">
                            <div className="flex gap-2 justify-center mb-1">
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                            </div>
                            <h3 className='font-bold  transition-all group-hover:text-white'>{product.title}</h3>
                            <p className='text-gray-600 group-hover:text-white transition-all'>{product.description}</p>
                            <button className='rounded-full mt-2 py-1'>Order Now</button>
                        </div>

                    </div>
                ))}
            </div>
            
        
        </section>
    )
}

export default TopProducts
