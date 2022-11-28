import React, { useState } from 'react';

import Battle from '../../../../public/Battlenet.png'
import Playstation from '../../../../public/Playstation.png'
import Nintendo from '../../../../public/Nintendo.png'
import Xbox from '../../../../public/Xbox.png'
import Dots from '../../../../public/GamesSVG.svg'

function Games() {

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
    </div>
  )
}

export default Games