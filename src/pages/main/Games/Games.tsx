import React, { useState } from 'react';
import './Games.scss'

import Battle from '../../../../public/Battlenet.png'
import Playstation from '../../../../public/Playstation.png'
import Nintendo from '../../../../public/Nintendo.png'
import Xbox from '../../../../public/Xbox.png'
import Dots from '../../../../public/GamesSVG.svg'

import {useQuery} from '@tanstack/react-query'
import Axios from 'axios'

type Game = {
  name: string;
  category: string;
  image: string;
  logo: string;
 }

function Games() {

  const {data} = useQuery(["games"], () => {
    return (Axios.get<Game[]>("https://api-brchallenges.vercel.app/api/blizzard/games").then((res) => res.data))
  })

  return (
    <div className='px-52 py-[100px] bg-black text-white'>
        <div className='flex justify-between items-end'>
            <div className='flex gap-44'>
                <p className='pt-2 uppercase text-costumGrey'>Games</p>
                <h3 className='text-[32px] font-bold'>Jogos<br></br> exclusivos</h3>
            </div>
            <div className='flex gap-6 pb-2'>
                <li><img src={Battle} alt="" /></li>
                <li><img src={Nintendo} alt="" /></li>
                <li><img src={Playstation} alt="" /></li>
                <li><img src={Xbox} alt="" /></li>
            </div>
            <div className='flex gap-2 pb-2'>
                <img className='max-w-[10px]' src={Dots} alt="" />
                <p className='text-blue font-semibold'>Ver todos os jogos</p>
            </div>
        </div>

        <div className='grid grid-cols-4 gap-20 pt-[100px]'>
          {data?.map((game) => ( 
            <div className='relative'>
              <img className='w-[100%] h-[422px]' src={game.image} alt="" />
              <div className='absolute top-0' id='game'></div>
              <img className='absolute bottom-[120px] right-[50%] translate-x-[50%]' src={game.logo} alt="" />
              <h5 className='text-[20px] font-semibold pt-4'>{game.name}</h5>
              <p className='text-[15px] text-category opacity-80 pt-1 font-normal'>{game.name}</p>
            </div>
          ))}    
          <div className='border border-indigo-600'>
              <img className='w-[100%] h-[422px]' src="" alt="" />
              <h5 className='text-[20px] font-semibold pt-4'>sdsadsadasd</h5>
              <p className='text-[15px] text-category opacity-80 pt-1 font-normal'>asdasdsadsad</p>
            </div>
        </div>
    </div>
  )
}

export default Games