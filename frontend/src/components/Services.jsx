import React from 'react'

const Services = ({image,title,description,index}) => {

  const handleMouseOver = (e) => {
    const parent = e.currentTarget;
    const img = parent.querySelector('img');
    if (img) {
      img.style.transform = 'scale(1.10)';
      img.style.transition = 'transform 0.3s ease-in-out';
    }
  };

  const handleMouseOut = (e) => {
    const parent = e.currentTarget;
    const img = parent.querySelector('img');
    if (img) {
      img.style.transform = 'scale(1)';
    }
  };

  return (
    <div className={`w-full min-h-[200px] max-h-[200px] flex  flex-col justify-center items-center overflow-hidden text-roboto shadow-lg cursor-pointer p-4 rounded-md bg-transparenthover:shadow-xl relative`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
       <div className='w-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 -z-20 opacity-50'>
        <img src={image} alt="" className='hover:scale-105 transition-all duration-300'/>
       </div>
       {/* black filter  */}
       <div className='w-full absolute top-0 left-0 right-0 bottom-0 -z-10 bg-black/60'></div>
       <div className='font-medium text-center mt-2 bg--transparent text-gray-300'>{title}</div>
       <div className='text-gray-300 text-sm mt-4 text-center bg-transparent'>{description}</div>
    </div>
  )
}

export default Services
