import React from 'react'
import './Hero.scss'

import Banner from '../../../../public/Banner.png'
import BlizzardLogo from '../../../../public/BlizzardLogo.png'
import Game1 from '../../../../public/Game1.png'
import Game2 from '../../../../public/Game2.png'
import Game3 from '../../../../public/Game3.png'
import Game4 from '../../../../public/Game4.png'
import Game5 from '../../../../public/Game5.png'
import DiabloBanner from '../../../../public/DiabloBanner.png'

import { UilAngleDown, UilUser } from '@iconscout/react-unicons'

function Hero() {
  return (
    <div className='containerr font-medium'>
        <div id='image' className='relative'></div>

        <nav className='absolute top-0 left-0 flex w-full h-20 items-center border-b-[2px] border-gray-600'>
            <div className='flex ml-52'>
            <img src={BlizzardLogo} alt="" />
                <ul className='flex gap-10 pl-32 items-center text-white'>
                    <li className='flex'>Jogos <UilAngleDown /></li>
                    <li className='flex'>Esports <UilAngleDown /></li>
                    <li>Loja</li>
                    <li>Notícias</li>
                    <li>Suporte</li>
                </ul>
            </div>
            <ul className='flex gap-10 absolute right-0 mr-52 text-white'>
                <button>Criar conta</button>
                <button className='flex gap-2 items-center bg-blue border-blue'><UilUser size="20"/> Logar</button>
            </ul>
        </nav>

        <div className='absolute top-20 left-0 text-white w-full h-[656px] flex items-center'>
            <div className='ml-52 flex flex-col gap-6'>
                <li><img src={Game1} alt="" /></li>
                <li><img src={Game2} alt="" /></li>
                <li><img src={Game3} alt="" /></li>
                <li><img src={Game4} alt="" /></li>
                <li><img src={Game5} alt="" /></li>
            </div>

            <div className='pl-36 flex flex-col gap-6'> 
                <h1 className='text-[64px] w-[800px] bg-blue font-bold leading-[80px]'>Retorne à escuridão com o game Diablo IV</h1>
                <p className='font-normal'>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
                <button className='w-40 mt-3 bg-blue border-blue'>Jogue agora</button>
            </div>

            <div className='absolute mr-52 right-0 flex flex-col gap-28'>
                <img src={DiabloBanner} alt="" />
                <div>
                    <p className='text-end uppercase pb-3 font-normal'>Assista o trailer</p>
                    <div className='w-[300px] h-[180px] bg-blue'>
                        Colocar aqui o Trailer
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 left-0 w-[30%] h-[4px] bg-blue'></div>
        </div>
    </div>
  )
}

export default Hero