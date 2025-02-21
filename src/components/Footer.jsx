import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white w-full px-4 sm:px-6 md:px-12 lg:px-20 py-24 flex justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  w-full max-w-screen-lg p-2 justify-center mx-auto place-items-center'>
      <div className='h-full flex flex-col justify-start gap-4  text-center sm:text-left'>
        <h3 className='text-2xl font-semibold'>Exclusive</h3>
        <p className='font-medium text-lg text-gray-200'>Subscribe</p>
        <p className='text-gray-200 text-sm'>Get 10% off your first order</p>
        <div className='flex gap-2 border rounded-lg p-2 items-center w-fit '>
        <input type="email" placeholder='Enter your email' className='outline-0 border-0 bg-transparent text-white  w-full placeholder-gray-300'/>
        <img src="/play.svg" alt="subscribe" />
        </div>
      </div>
      <div className='h-full flex flex-col justify-start gap-3  text-center sm:text-left'>
        <h3 className='text-lg font-medium'>Support</h3>
        <div className='text-gray-200 text-sm'>
          <p>1234, Park street, </p>
          <p>DL-111111, India</p>
        </div>
        <p className='text-gray-200 text-sm'>Test@testmail.com</p>
        <p className='text-gray-200 text-sm'>+91-999-999-9999</p>
      </div>
      <div className='h-full flex flex-col justify-start gap-3  text-center sm:text-left'>
        <h3 className='text-lg font-medium'>Account</h3>
        <p className='text-gray-200 text-sm'>My Account</p>
        <p className='text-gray-200 text-sm'>Login / Register</p>
        <p className='text-gray-200 text-sm'>Cart</p>
        <p className='text-gray-200 text-sm'>Wishlist</p>
        <p className='text-gray-200 text-sm'>Shop</p>
      </div>
      <div className='h-full flex flex-col justify-start gap-3  text-center sm:text-left'>
        <h3 className='text-lg font-medium'>Quick Link</h3>
        <p className='text-gray-200 text-sm'>Privacy Policy</p>
        <p className='text-gray-200 text-sm'>Terms of Use</p>
        <p className='text-gray-200 text-sm'>FAQ</p>
        <p className='text-gray-200 text-sm'>Contact</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
