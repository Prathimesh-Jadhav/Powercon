import React from 'react'

const Qualities = ({quality}) => {
  return (
    <div className='min-w-[200px] max-w-[200px] flex gap-2 items-center justify-start'>
        <div className='bg-secondary min-h-[25px] min-w-[25px] rounded-full flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <div className='text-md font-medium text-gray-600'>{quality}</div>
    </div>
  )
}

export default Qualities
