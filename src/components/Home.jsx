import React from 'react'

const Home = () => {
  return (
    <div className='relative h-[70vh] md:h-[93vh] w-full grid grid-cols-1 md:grid-cols-2'>
      <div className='bg-white'></div>
      <div className='bg-yellow-200'></div>
      <div className='absolute w-full px-6 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
      <p className="text-4xl md:text-6xl font-semibold leading-tight ">
          Welcome to <span className="underline decoration-2">My Store</span>
        </p>
        <p className="text-4xl md:text-6xl font-semibold leading-tight  my-3">Your Shopping </p>
        <p className='text-4xl md:text-6xl font-semibold leading-tight  mb-12'>Destination</p>
        <p className="mt-2 text-gray-600 max-w-xs sm:max-w-md md:max-w-xl text-base md:text-lg mx-auto pb-10">
          Discover a wide range of products tailored just for you. Shop with ease and find exactly what you need.
        </p>
      </div>
    </div>
  )
}

export default Home
