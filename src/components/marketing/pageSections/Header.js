import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg';

export default function Header() {
  return (
    <div className='flex items-center justify-between py-10'>
        <div className='bg-red-500 h-20 w-full'>

         <img src={Logo} alt='Burger House App' className='w-64' />
        </div>
        <div className='bg-gray-500 h-20 w-full'>

        </div>
    </div>
  )
}
