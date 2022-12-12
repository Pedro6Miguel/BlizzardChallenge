import React, { useState } from 'react';
import './Games.scss'

import Battle from '/Battlenet.png'
import Playstation from '/Playstation.png'
import Nintendo from '/Nintendo.png'
import Xbox from '/Xbox.png'
import Dots from '/GamesSVG.svg'
import BlizzardLogo from '/BlizzardLogo.png'
import WhiteDots from '/WhiteDots.png'

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
    <div className='px-52 py-[100px] bg-black text-white max-lg:px-28 max-sm:px-12 max-xxs:px-4 max-xxs:py-[50px]'>
        <div className='flex justify-between items-end'>
            <div className='flex gap-44'>
                <p className='pt-2 uppercase text-costumGrey max-md:hidden'>Games</p>
                <h3 className='text-[32px] font-bold max-xs:text-[28px]'>Jogos<br></br> exclusivos</h3>
            </div>
            <div className='flex gap-6 pb-2 max-xs:hidden'>
                <li><img src={Battle} alt="" /></li>
                <li><img src={Nintendo} alt="" /></li>
                <li><img src={Playstation} alt="" /></li>
                <li><img src={Xbox} alt="" /></li>
            </div>
            <div className='flex gap-2 pb-2'>
                <img className='max-w-[10px]' src={Dots} alt="" />
                <p className='text-blue font-semibold cursor-pointer'>Ver todos os jogos</p>
            </div>
        </div>

        <div className='grid grid-cols-4 gap-6 pt-[80px] cursor-pointer max-md:grid-cols-3 max-xs:grid-cols-2 max-xxs:pt-[40px]'>
          {data?.map((game) => ( 
            <div className='relative pt-[20px]'>
              <div className='truncate'>
                <img id='image' className='w-[340px] h-[422px] object-cover hover:scale-110 ease-in duration-100 max-lg:h-[350px] max-xxs:h-[280px]' src={game.image} alt="" />
                <img className='absolute bottom-[120px] right-[50%] translate-x-[50%] max-sm:h-[90px] max-xxs:hidden' src={game.logo} alt="" />
              </div>
              <h5 className='text-[20px] font-semibold pt-4'>{game.name}</h5>
              <p className='text-[15px] text-category opacity-80 pt-1 font-normal'>{game.name}</p>
            </div>
          ))}    
          <div className='border-[2px] mt-[20px] border-gray-800 rounded-[4px] h-[422px] flex flex-col justify-center items-center max-lg:h-[350px]'>
            <img src={BlizzardLogo} alt="" />
            <div className='flex items-center pt-12 gap-4'>
              <img className='w-[9.9px] h-[9.9px]' src={WhiteDots} alt="" />
              <p className='text-[20px] font-semibold'>Ver todos jogos</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Games