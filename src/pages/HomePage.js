import React from 'react'
import HeroTop from '../components/marketing/pageSections/HeroTop'
import LastProducts from '../components/marketing/LastProducts'
import Products from '../components/marketing/Products'
import Event from '../components/marketing/pageSections/Event'
import Booking from '../components/marketing/pageSections/Booking'
import Footer from '../components/marketing/pageSections/Footer'

export default function HomePage() {
  return (
    <>
    {/* <div className='bg-red-500 sm:bg-blue-500 md:bg-yellow-600 lg:bg-indigo-500 xl:bg-green-500 2xl:bg-pink-500 w-full h-20'></div> */}
  
        <HeroTop />
        <LastProducts />
        <Products />
        <Event />
        <Booking />
        <Footer />
    </>
  )
}
