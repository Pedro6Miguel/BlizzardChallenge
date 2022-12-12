import React, { useState } from 'react';
import './Down.scss'

import MainBg from '/Main.png'
import SecondaryBg from '/Secondary.png'
import BattlenetLogo from '/BattleLg.png'
import Icon1 from '/Icon1.png'
import Icon2 from '/Icon2.png'
import Icon3 from '/Icon3.png'
import Phone from '/Phone.png'

function Down() {

  return (
    <div id='bg' className='pl-52 pr-24 text-white h-[852px] flex items-center justify-between max-lg:pl-28 max-lg:pr-0 max-sm:px-12'>
        <div>
            <img src={BattlenetLogo} alt="" />
            <h4 className='text-[32px] font-bold py-6'>Baixe agora o battle.net</h4>
            <ul className='flex flex-col gap-4'>
                <li className='flex gap-3'><img className='w-[auto] h-[20px] shrink-0' src={Icon1} alt="" /> Seus jogos em um só lugar</li>
                <li className='flex gap-3'><img className='w-[auto] h-[20px] shrink-0' src={Icon2} alt="" /> Conecte-se aos seus amigos</li>
                <li className='flex gap-3'><img className='w-[auto] h-[20px] shrink-0' src={Icon3} alt="" /> Compre jogos e itens digitais</li>
            </ul>
            <button className='bg-blue border-blue my-10'>Baixar para o MacOS</button>
            <div className='flex gap-4 items-center'>
                <img className='w-[14px] h-[20px]' src={Phone} alt="" />
                <p>Também disponível como <span className='underline'><br></br>aplicativo móvel</span></p>
            </div>
        </div>
        <div id='responsiveness' className='max-sm:w-[840px]'>
            <img className='' src={MainBg} alt="" />
            <img className='absolute bottom-0 right-[50%] translate-x-[50%]' src={SecondaryBg} alt="" />
        </div>
    </div>
  )
}

export default Down