import React from 'react'

const Discover = () => {
  return (
    <div className='bg-black text-white py-16 px-6 md:px-12 lg:px-16 flex flex-col items-center md:items-start gap-6 text-center md:text-left'>
      <h1 className='text-3xl md:text-4xl font-semibold'>Discover Your Next Favorite Item</h1>
      <p className='text-sm max-w-md'>Browse Our exclusive collection and find the perfect product tailored just for you.</p>
      <div className='flex flex-col sm:flex-row items-center gap-4'>
        <button className='px-6 py-2 bg-white text-black  rounded-lg cursor-pointer hover:bg-gray-200 transition duration-500'>Shop</button>
        <button className='border px-6 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition duration-500'>Learn more</button>
      </div>
    </div>
  )
}

export default Discover
