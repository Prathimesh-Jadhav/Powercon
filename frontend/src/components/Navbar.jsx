import React, { useEffect } from 'react'
import { IoMdMenu } from "react-icons/io";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
  const [blur, setBlur] = React.useState(false)

  useEffect(()=>{

    window.addEventListener('scroll', () => {
      if(window.scrollY > 0){
        setBlur(true)
      }
      else{
        setBlur(false)
      }
    }
    )

    return () => {
      window.removeEventListener('scroll', () => {
        if(window.scrollY > 0){
          setBlur(true)
        }
        else{
          setBlur(false)
        }
      })
    }
  },[window.scrollY])

  return (
    <div className={`w-full h-16 flex items-center justify-between md:px-10 max-md:px-4 py-4 text-roboto fixed top-0 right-0 left-0 gap-4 nav z-50${blur ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'} transition-all duration-300 ease-in-out`}>
        <a href="#home" className='text-2xl font-bold text-gray-800 flex items-center space-x-2 flex-wrap'>
            <span className='text-gray-400'>Powercon</span>
            <span className='text-secondary'>Electronics</span>
        </a>
        <div className='flex items-center space-x-4 max-md:hidden z-10'>
            <a href="#home" className='text-gray-400 hover:text-white font-medium cursor-pointer'>Home</a>
            <a href="#about" className=' text-gray-400 hover:text-white font-medium cursor-pointer'>About us</a>
            <a href="#services" className=' text-gray-400 hover:text-white font-medium cursor-pointer'>Services</a>
            <a href="#products" className='text-gray-400 hover:text-white font-medium cursor-pointer'>Products</a>
            <a href="#testimonials" className=' text-gray-400 hover:text-white font-medium cursor-pointer'>Testimonials</a>
            <a href="#contact" className=' text-gray-400 hover:text-white font-medium cursor-pointer'>Contact</a>
        </div>
        <a href='#contact' className='p-2 rounded-md bg-secondary text-white px-4 hover:bg-yellow-600 cursor-pointer max-md:hidden'>Contact us</a>

        {/* mobile menu */}
        <div className='max-md:block hidden'><IoMdMenu color='white' size={30}/></div>
    </div>
  )
}

export default Navbar
