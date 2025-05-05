import React, { use } from 'react'
import Navbar from '../components/Navbar'
import cnc from '../assets/cnc1.gif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import HeroStats from '../components/HeroStats'
import shop from '../assets/shop.jpg'
import Qualities from '../components/Qualities'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from '../data'
import Services from '../components/Services'
import { spareParts } from '../data'
import { Star, Truck } from 'lucide-react'
import ProductsCard from '../components/ProductsCard'
import TestimonialsSection from '../components/Testimonials'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    const aboutImageRef = React.useRef(null)

    useGSAP(() => {
        gsap.from('.intro', {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        })
    });

    const [qualities, setQualities] = React.useState([
        'Quality Assurance',
        'Customer Satisfaction',
        'Timely Delivery',
        'Competitive Pricing',
        'Expertise and Experience',
        'Innovation and Technology'
    ])

    return (
        <div className='w-full bg-transparent min-h-screen flex flex-col justify-center items-center text-white  text-roboto  overflow-hidden'>

            {/* Hero Section */}
            <div className='w-full min-h-screen flex flex-col justify-center items-center relative md:px-10 max-md:px-4' id='home'>
                <div className='absolute -z-20 top-0 left-0 right-0 bottom-0'>
                    <img src={cnc} alt="background" className='w-full h-full object-cover opacity-100' />
                </div>
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70'></div>
                <Navbar />
                <div className='min-h-[75vh] flex flex-col items-center justify-center w-full text-center gap-4 z-10 mt-16'>
                    <div className=''>
                        <div className='intro'>
                            <span className=' font-medium text-primary  text-5xl'>Powercon</span><span className=' font-bold text-secondary text-5xl'> Electronics</span>
                        </div>
                        <div className='text-lg mt-3 intro text-gray-400'>Execel in providing CNC related services and power solutions.</div>
                        <div className='p-2 rounded-md bg-secondary intro text-white  hover:bg-yellow-600 cursor-pointer mt-6 inline-block px-6'>Explore</div>
                    </div>
                </div>
                <div className='z-20'><HeroStats /></div>
            </div>

            {/* About section  */}
            <div className='w-full max-md:px-4 md:px-10 py-10 bg-gray-300 text-roboto text-gray-800' id='about'>
                <h1 className='text-center text-3xl text-black'>About us</h1>
                <div className='mt-16 px-4 flex justify-center gap-16 flex-wrap '>
                    <div className='comapny-image' ref={aboutImageRef}>
                        <img src={shop} alt="" className='rounded-md' />
                    </div>
                    <div className='md:px-6'>
                        <h2 className='text-2xl font-medium'>Your best choice for CNC related services</h2>
                        <div className='max-w-[650px] mt-4 text-roboto'>
                            <p className='mt-4 text-gray-600'>We are a leading provider of CNC related services, specializing in precision machining and manufacturing. Our tem.</p>
                            <p className='mt-4 text-gray-600'>With years of experience in the industry, we have the knowledge and expertise to handle even the most complex projects. We use state-of-the-art.</p>
                            <p className='mt-4 text-gray-600'>At Powercon Electronics, we are committed to providing our customers with the best possible service. We work closely with our clients to understand .</p>
                            <div className='flex justify-start gap-5 flex-wrap mt-6'>
                                {
                                    qualities.map((quality, index) => (
                                        <Qualities key={index} quality={quality} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* services section  */}
            <div className='w-full max-md:px-4 md:px-10 py-10 bg-gray-300 text-roboto text-gray-800 z-20' id='services'>
                <h3 className='text-3xl font-medium text-center'>Services</h3>
                <p className='text-sm text-center text-gray-600 mt-2'>We provide excellent services</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'>
                    {
                        services.map((service, index) => (
                            // <div key={index} className='bg-white rounded-md shadow-md p-4 flex flex-col items-center justify-center'>
                            //     <img src={service.image} alt="" className='w-16 h-16' />
                            //     <h3 className='text-lg font-medium mt-2'>{service.title}</h3>
                            //     <p className='text-sm text-gray-600 mt-2'>{service.description}</p>
                            // </div>
                            <Services index={index} image={service.image} title={service.title} description={service.description} />
                        ))
                    }
                </div>
            </div>

            {/* Products section  */}

            <div className='w-full max-md:px-4 md:px-10 py-10 bg-gray-300 text-roboto text-gray-800 z-20' id='products'>
                <h3 className='text-3xl font-medium text-center' > Our Products</h3>
                <p className='text-sm text-center text-gray-600 mt-2'> We provide excellent products</p>
                <div className="grid md:grid-cols-3 gap-6 mt-16">
                    {spareParts.map((part) => (
                        <ProductsCard part={part} />
                    ))}
                </div>
            </div>

            {/* Testimonials section  */}
            <TestimonialsSection/>
             <Contact/>
            <Footer/>


        </div>
    )
}

export default Home
