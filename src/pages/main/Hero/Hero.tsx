import React, { useState } from 'react';
import './Hero.scss'

import { LIST_DATA, ListData } from './data';

import Banner from '../../../../public/Banner.png'
import BlizzardLogo from '../../../../public/BlizzardLogo.png'
import DiabloBanner from '../../../../public/DiabloBanner.png'

import { UilAngleDown, UilUser } from '@iconscout/react-unicons'

function Hero() {

  const [sliderData, setSliderData] = useState(LIST_DATA[0])

  const handleClick = (id) => {
    const slider=LIST_DATA[id]
    setSliderData(slider)
  }

  return (
    <div className='font-medium'>
        <img src={sliderData.imge} alt="" className='relative w-full h-[736px] object-cover'/>
        <div id='teste' className='absolute top-0 left-0'></div>

        <nav className='absolute top-0 left-0 flex w-full h-20 items-center border-b-[2px] border-nav'>
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
            {LIST_DATA.map((data, i) =>(
                <img className={sliderData.id==i ? "" : "grayscale"} key={data.id} src={data.icon} onClick={() => handleClick(i)} alt="" />
            ))}
            
            </div>

            <div className='pl-36 gap-6'> 
                <h1 className='text-[64px] w-[600px] font-bold leading-[80px]'>{sliderData.title}</h1>
                <p className='font-normal py-5'>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
                <button className='flex flex-row gap-2 w-auto mt-3 bg-blue border-blue'><UilUser />{sliderData.button}</button>
            </div>

            <div className='absolute mr-52 right-0 flex flex-col gap-28'>
                <img src={sliderData.logo} alt="" />
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