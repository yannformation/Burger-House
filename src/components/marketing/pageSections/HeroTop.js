import React from 'react'
import illustration from '../../../medias/images/background/bg-food.jpg'
import Product from '../../../medias/images/heroTop/burger-hero-top.png'
import Container from '../../elements/Container'
import Header from './Header'

export default function HeroTop() {
  return (
    <div className='bg-primary w-full h-screen'>
        <div className="bg-repeat w-full h-full" style={{backgroundImage: `url(${illustration})`}}>
            <Container>
               <Header />
               <div className='w-full flex items-center'>
                <div className='w-2/3 text-secondary uppercase'>
                    <h1 className=' text-xl mb-7'>C'est le moment de goûter au bon goût des hamburgers.</h1>
                    <h2 className='font-secondary'>
                    <span className='text-8xl block'>Burger</span>
                    <span className='text-6xl'>House</span> <span className='text-4xl ml-3'> Click&Collect</span>
                    </h2>
                </div>
                <div className='w-1/3'>
                    <img src={Product} alt="Un menu hamburger avec frites et Coca-Cola." />
                </div>
               </div>
            </Container>
        </div>
    </div>
  )
}
