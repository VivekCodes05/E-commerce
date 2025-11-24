import React from 'react'

const Subscribe = () => {
  return (
    <div data-aos ="zoom-in" className='mb-20 bg-slate-700 dark:bg-gray-800 text-white' >
        <div className='container backdrop-blur-sm py-10'>
            <div className=' space-y-6 max-w-xl mx-auto '>
                <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold '> Get notified about new products </h1>
                <input type="text" data-aos="fade-up" placeholder='Enter your email' className='p-3 w-full text-black' />
            </div>
        </div>
    </div>
  )
}

export default Subscribe