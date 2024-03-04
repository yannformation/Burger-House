import React from 'react'
import HeroTop from '../components/marketing/pageSections/HeroTop'
import LastProducts from '../components/marketing/LastProducts'
import Products from '../components/marketing/Products'
import Event from '../components/marketing/pageSections/Event'

export default function HomePage() {
  return (
    <>
        <HeroTop />
        <LastProducts />
        <Products />
        <Event />
    </>
  )
}
