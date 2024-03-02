import React from 'react'
import illustration from '../../../medias/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'

export default function HeroTop() {
  return (
    <div className='bg-primary w-full h-screen'>
        <div className="bg-repeat w-full h-full" style={{backgroundImage: `url(${illustration})`}}>
            <Container>
               <Header />
            </Container>
        </div>
    </div>
  )
}
