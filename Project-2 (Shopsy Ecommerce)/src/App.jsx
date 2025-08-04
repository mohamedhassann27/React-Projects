import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
// react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscripe from './components/Subscripe/Subscripe';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

function App() {

  AOS.init({
    offset: 100, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing:'ease-in-sine', // default easing for AOS animations
  });

  return (
    <>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscripe/>
      <Products/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
