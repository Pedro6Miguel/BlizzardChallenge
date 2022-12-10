import React, { useState } from 'react';
import './Hero.scss'

import { LIST_DATA, ListData } from './data';
import { GAMES_DROPDOWN, GamesDropdown } from './data';
import { ESPORTS_DROPDOWN, EsportsDropdown } from './data';

import BlizzardLogo from '/BlizzardLogo.png'
import BlueDots from '/BlueDots.png'
import Chat from '/Chat.png'
import DownloadIcon from '/DownloadIcon.png'
import LogoIcon from '/LogoIcon.png'
import Tournaments from '/Tournaments.png'

import { UilAngleDown, UilUser } from '@iconscout/react-unicons'

function Hero() {

  const [open, setOpen] = useState(false)
  const [esportsOpen, setEsportsOpen] = useState(false)

  // -- //

  const [sliderData, setSliderData] = useState(LIST_DATA[0])

  const handleClick = (id:any) => {
    const slider=LIST_DATA[id]
    setSliderData(slider)
  }

  return (
    <div className='font-medium'>
        <img src={sliderData.imge} alt="" className='relative w-full h-[736px] object-cover'/>
        <div id='lightning' className='absolute top-0 left-0'></div>

        <nav className='absolute top-0 left-0 flex w-full h-28 items-center border-b-[2px] border-nav'>
            <div className='flex ml-52 max-lg:ml-28'>
            <img src={BlizzardLogo} alt="" />
                <ul className='flex gap-10 pl-32 items-center text-white'>
                    <li className='flex' onClick={() => {setOpen(!open); setEsportsOpen(false)}}>Jogos <span className={open ? 'rotate-180 transition-all' : 'transition-all'}><UilAngleDown /></span></li>
                    <div id='gradient' className={open ? 'absolute top-[7rem] left-0 h-[540px] w-[100%] z-10 flex justify-center items-center flex-col' : 'hidden'}>
                        <div className='grid grid-cols-6 gap-[100px]'>
                            {GAMES_DROPDOWN.map((data, i) =>(
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <img className='h-[80px] w-[80px]' src={data.image} alt="" />
                                    <p className='text-text font-normal text-center text-[14px]'>{data.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className='w-[100%] h-[90px] bg-dropdown absolute bottom-[-16%] flex items-center justify-center gap-32'>
                            <li className='flex items-center gap-4'><img className='w-[10px] h-[10px]' src={BlueDots} alt="" /> Ver todos jogos</li>
                            <li className='flex items-center gap-4'><img src={LogoIcon} alt="" /> Aplicativo Battle.net</li>
                            <li className='flex items-center gap-4'><img className='w-[22px] h-[22px]' src={DownloadIcon} alt="" /> Downloads</li>
                            <li className='flex items-center gap-4'><img src={Chat} alt="" /> Fóruns dos jogos</li>
                        </div>
                    </div>
                    <li className='flex' onClick={() => {setEsportsOpen(!esportsOpen); setOpen(false)}}>Esports <span className={esportsOpen ? 'rotate-180 transition-all' : 'transition-all'}><UilAngleDown /></span></li>
                    <div id='gradient' className={esportsOpen ? 'absolute top-[7rem] left-0 h-[540px] w-[100%] z-10 flex justify-center items-center flex-col' : 'hidden'}>
                        <div className='grid grid-cols-5 gap-[100px]'>
                            {ESPORTS_DROPDOWN.map((data, i) =>(
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <img src={data.image} alt="" />
                                    <p className='text-text font-normal text-center text-[14px]'>{data.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className='w-[100%] h-[90px] bg-dropdown absolute bottom-[-16%] flex items-center justify-center gap-32'>
                            <li className='flex items-center gap-3'><img className='' src={Tournaments} alt="" />Torneios da comunidade</li>
                        </div>
                    </div>
                    <li>Loja</li>
                    <li>Notícias</li>
                    <li>Suporte</li>
                </ul>
            </div>
            <ul className='flex gap-10 absolute right-0 mr-52 text-white max-lg:mr-28'>
                <button>Criar conta</button>
                <button className='flex gap-2 items-center bg-blue border-blue'><UilUser size="20"/> Logar</button>
            </ul>
        </nav>

        <div className='absolute top-20 left-0 text-white w-full h-[656px] flex items-center'>
            <div className='ml-52 flex flex-col gap-6 max-lg:ml-28'>
            {LIST_DATA.map((data, i) =>(
                <img className={sliderData.id==i ? "" : "grayscale"} key={data.id} src={data.icon} onClick={() => handleClick(i)} alt="" />
            ))}
            
            </div>

            <div className='pl-36 gap-6'> 
                <h1 className='text-[64px] w-[600px] font-bold leading-[80px]'>{sliderData.title}</h1>
                <p className='font-normal py-5'>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
                <button className='flex flex-row gap-2 w-auto mt-3 bg-blue border-blue'><UilUser />{sliderData.button}</button>
            </div>

            <div className='absolute mr-52 right-0 flex flex-col gap-28 max-lg:mr-28'>
                <img src={sliderData.logo} alt="" />
                <div className='flex flex-col items-end'>
                    <p className='text-end uppercase pb-3 font-normal'>Assista o trailer</p>
                    <div className='w-[300px] h-[180px] bg-blue'>
                    
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 left-0 w-[30%] h-[4px] bg-blue'></div>
        </div>
    </div>
  )
}

export default Hero