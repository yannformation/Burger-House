import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg';
import Icone from '../../../medias/svg/ico-bag-clickAndCollect.svg';
import Button from '../../elements/Button';


export default function Header() {
  return (
    <div className='flex items-center justify-between py-10'>
        <div className='w-full'>
         <img src={Logo} alt='Burger House App' className='w-64' />
        </div>
        <div className='w-full text-secondary'>
            <div className='flex items-center justify-end'>
            <img src={Icone} alt="Icone du click & collect" className='w-5 h-5 mr-3' />
            <span className='font-semibold tracking-wide'>Commandez votre repas en ligne</span>
            </div>
            <div className='flex items-center justify-end mt-5'>
                <Button className={'bg-primary hover:bg-secondary mr-2'}>
                    Inscription
                </Button>
                <Button className={'bg-secondary hover:bg-primary'}>
                    Connexion
                </Button>
            </div>
        </div>
    </div>
  )
}
