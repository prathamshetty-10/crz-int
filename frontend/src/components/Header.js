import React from 'react'

export default function Header() {
  return (
    <div className='w-full bg-[#243B58]'>
        <div className='text-white flex flex-col lg:p-3 p-3 lg:text-center'>
            <p className='font-bold lg:text-lg text-[0.6rem]'>GOVERNMENT OF KARNATAKA</p>
            <p className='lg:text-lg text-[0.4rem]'>DEPARTMENT OF ECOLOGY AND ENVIRONMENT</p>
        </div>
        <button className='bg-blue-800 text-white px-4 lg:py-2 py-1 rounded-lg hover:bg-blue-900 whitespace-nowrap lg:text-lg text-[0.6rem] absolute right-2 lg:top-4 top-3' >Kannada</button>
    </div>
  )
}
