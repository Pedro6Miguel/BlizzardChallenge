import React, { useState } from 'react';
import './Hero.scss'

import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import { LIST_DATA, ListData } from './data';
import { GAMES_DROPDOWN, GamesDropdown } from './data';
import { ESPORTS_DROPDOWN, EsportsDropdown } from './data';

import ArrowVector from '/ArrowVector.png'
import ArrowVectorBlue from '/ArrowVectorBlue.png'
import CreateVector from '/CreateVector.png'

import BattleLg from '/BattleLg.png'
import BlizzardLogo from '/BlizzardLogo.png'
import BlueDots from '/BlueDots.png'
import Chat from '/Chat.png'
import DownloadIcon from '/DownloadIcon.png'
import LogoIcon from '/LogoIcon.png'
import Tournaments from '/Tournaments.png'
import PlayBtn from '/PlayBtn.png'

import GoogleForm from '/GoogleForm.png'
import AppleForm from '/AppleForm.png'
import FaceForm from '/FaceForm.png'
import CloseForm from '/CloseForm.png'

function Hero() {

  const [open, setOpen] = useState(false)
  const [esportsOpen, setEsportsOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [hoverVideo, setHoverVideo] = useState(false)
  const [openForm, setOpenForm] = useState(false)

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

        <nav className={esportsOpen || open || navOpen ? 'absolute top-0 left-0 flex w-full h-28 items-center border-b-[2px] border-nav bg-dropnav max-md:justify-between' : 'absolute top-0 left-0 flex w-full h-28 items-center border-b-[2px] border-nav max-md:justify-between'}>
            <div className='flex ml-52 max-lg:ml-28 max-sm:ml-12'>
                <a href=""><img src={BlizzardLogo} alt="" /></a>
                <ul className='flex gap-10 pl-32 items-center text-white max-md:hidden'>
                    <li className='flex cursor-pointer items-center gap-2' onClick={() => {setOpen(!open); setEsportsOpen(false)}}>Jogos<span>{open ? <img src={ArrowVectorBlue} alt="" /> : <img src={ArrowVector} alt="" />}</span></li>
                    <div id='gradient' className={open ? 'absolute top-[7rem] left-0 h-[540px] w-[100%] z-10 flex justify-center items-center flex-col' : 'hidden'}>
                        <div className='grid grid-cols-6 gap-[100px] px-[100px]'>
                            {GAMES_DROPDOWN.map((data, i) =>(
                                <div key={data.id} className='flex flex-col items-center gap-[10px] cursor-pointer'>
                                    <img className='h-[80px] w-[80px]' src={data.image} alt="" />
                                    <p className='text-text font-normal text-center text-[14px] '>{data.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className='w-[100%] h-[90px] bg-dropdown absolute bottom-[-16%] flex items-center justify-center gap-32'>
                            <li className='flex items-center gap-4 cursor-pointer'><img className='w-[10px] h-[10px]' src={BlueDots} alt="" /> Ver todos jogos</li>
                            <li className='flex items-center gap-4 cursor-pointer'><img src={LogoIcon} alt="" /> Aplicativo Battle.net</li>
                            <li className='flex items-center gap-4 cursor-pointer'><img className='w-[22px] h-[22px]' src={DownloadIcon} alt="" /> Downloads</li>
                            <li className='flex items-center gap-4 cursor-pointer'><img src={Chat} alt="" /> Fóruns dos jogos</li>
                        </div>
                    </div>
                    <li className='flex cursor-pointer items-center gap-2' onClick={() => {setEsportsOpen(!esportsOpen); setOpen(false)}}>Esports <span><span>{esportsOpen ? <img src={ArrowVectorBlue} alt="" /> : <img src={ArrowVector} alt="" />}</span></span></li>
                    <div id='gradient' className={esportsOpen ? 'absolute top-[7rem] left-0 h-[540px] w-[100%] z-10 flex justify-center items-center flex-col' : 'hidden'}>
                        <div className='grid grid-cols-5 gap-[100px]'>
                            {ESPORTS_DROPDOWN.map((data, i) =>(
                                <div key={data.id} className='flex flex-col items-center gap-[10px] cursor-pointer'>
                                    <img src={data.image} alt="" />
                                    <p className='text-text font-normal text-center text-[14px]'>{data.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className='w-[100%] h-[90px] bg-dropdown absolute bottom-[-16%] flex items-center justify-center gap-32'>
                            <li className='flex items-center gap-3 cursor-pointer'><img className='' src={Tournaments} alt="" />Torneios da comunidade</li>
                        </div>
                    </div>
                    <li className='cursor-pointer'>Loja</li>
                    <li className='cursor-pointer'>Notícias</li>
                    <li className='cursor-pointer'>Suporte</li>
                </ul>
            </div>
            <ul className='flex gap-4 absolute right-0 mr-52 text-white max-lg:mr-28 max-md:hidden'>
                <button onClick={() => {setOpenForm(true)}}>Criar conta</button>
                <button onClick={() => {setOpenForm(true)}} className='flex gap-2 items-center bg-blue border-blue'><img src={CreateVector} alt="" />Logar</button>
            </ul>
            <div className='flex gap-12 md:hidden text-white'>
                <ul className='flex gap-4 max-[590px]:hidden'>
                    <button onClick={() => {setOpenForm(true)}}>Criar conta</button>
                    <button onClick={() => {setOpenForm(true)}} className='flex gap-2 items-center bg-blue border-blue'><img src={CreateVector} alt="" />Logar</button>
                </ul>
                <span onClick={() => {setNavOpen(!navOpen)}} id='burger' className='mt-1 z-20 mr-28 cursor-pointer pt-[4px] max-sm:mr-12'>{!navOpen ? <RxHamburgerMenu size={32} /> : <RxCross1 size={32} />}</span>     
            </div>
        </nav>
        <div id='gradient' className={navOpen ? 'text-white absolute top-0 w-[100%] h-[656px] mt-28 z-10 flex flex-col justify-center gap-16 items-center md:hidden' : 'hidden'}>
            <li className='flex cursor-pointer items-center gap-2'>Jogos</li>
                    <div id='gradient' className={open ? 'absolute top-0 left-0 h-[656px] w-[100%] z-10 flex pt-[100px] items-center flex-col' : 'hidden'}></div>
                    <li className='flex cursor-pointer items-center gap-2'>Esports</li>
                    <div id='gradient' className={esportsOpen ? 'absolute top-0 left-0 h-[656px] w-[100%] z-10 flex justify-center items-center flex-col' : 'hidden'}>
                        
                    </div>
                    <li className='cursor-pointer'>Loja</li>
                    <li className='cursor-pointer'>Notícias</li>
                    <li className='cursor-pointer'>Suporte</li>
                    <li className='cursor-pointer min-[590px]:hidden'>Conta</li>
        </div>

        <div className='absolute top-20 left-0 text-white w-full h-[656px] flex items-center max-[830px]:flex-col-reverse max-[830px]:top-[0px] max-[830px]:gap-12 max-[830px]:left-[-100px] max-[830px]:ml-12 max-[660px]:top-[-50px] max-[660px]:left-[-70px]'>
            <div className='ml-52 flex flex-col gap-6 max-lg:ml-28 max-sm:ml-12 max-[830px]:flex-row max-[830px]:ml-[-16px]'>
            {LIST_DATA.map((data, i) =>(
                <img key={data.id} className={sliderData.id==i ? "" : "grayscale cursor-pointer"} src={data.icon} onClick={() => handleClick(i)} alt="" />
            ))}
            
            </div>

            <div className='pl-36 gap-6 max-md:pl-24'> 
                <h1 className='text-[64px] w-[600px] font-bold leading-[80px] max-md:w-[700px] max-md:text-[52px] max-md:leading-[60px] max-[1080px]:w-[550px] max-[660px]:text-[44px]'>{sliderData.title}</h1>
                <p className='font-normal py-5'>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
                <div className='flex gap-2'>
                    <button className='flex flex-row gap-2 w-auto mt-3 bg-blue border-blue'>{sliderData.button}</button>
                    <button className='flex flex-row gap-2 w-auto mt-3 md:hidden'>Trailer</button>
                </div>
            </div>

            <div className='absolute mr-52 right-0 flex flex-col gap-28 max-lg:mr-28 max-md:hidden'>
                <img id='logo' src={sliderData.logo} alt="" />
                <div onMouseEnter={() => {setHoverVideo(false)}} onMouseLeave={() => {setHoverVideo(true)}} id='video' className='flex flex-col items-end'>
                    <p className='text-end uppercase pb-3 font-normal'>Assista o trailer</p>        
                    <iframe src={sliderData.gif} scrolling="no" height="200px" width="300px" title="description"></iframe>
                    <div className='w-[300px] h-[200px] absolute bottom-0 flex items-center justify-center'>
                        <a href={sliderData.trailer} target="_blank"><img className={hoverVideo ? "hidden" : ""} src={PlayBtn} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-0 w-[30%] h-[4px] bg-blue max-[830px]:hidden'></div>
        </div>
        {/* Register modal */}
        <div className={openForm ? 'overflow-hidden w-[100vw] h-[100vh] bg-transparent z-20 flex items-center justify-center fixed top-0 text-white' : 'hidden'}>
            <div className='w-[100%] h-[100%] bg-gray-800 absolute opacity-90'></div>
            <div id='form' className='w-[696px] h-[598px] bg-slate-500 absolute opacity-1 flex flex-col items-center justify-center'>
                <span onClick={() => {setOpenForm(false)}} className='z-40 absolute top-0 right-0 pt-6 pr-6 cursor-pointer'><img className='min-w-[20px] min-h-[20px]' src={CloseForm} alt="" /></span>
                <img className='w-[166.53px] h-[20px] mb-12' src={BattleLg} alt="" />
                <form action="" className='flex flex-col gap-[16px]'>
                    <input className='outline-none w-[420px] h-[48px] text-[15px] font-medium text-gray-400 pl-4' type="text" placeholder='E-mail ou telefone'/>
                    <input className='outline-none w-[420px] h-[48px] text-[15px] font-medium text-gray-400 pl-4' type="text" placeholder='Senha'/>
                    <button className='bg-blue border-blue mt-3'>Conectar-se</button>
                </form>
                <p className='text-[14px] font-medium mt-8 mb-4'>ou conecte-se com</p>
                <ul className='flex gap-2'>
                    <button className='h-[48px] w-[48px] flex justify-center items-center bg-white'><img className='min-w-[20px]' src={GoogleForm} alt="" /></button>
                    <button className='h-[48px] w-[48px] flex justify-center items-center bg-white'><img className='min-w-[18.48px] pb-[3px]' src={AppleForm} alt="" /></button>
                    <button className='h-[48px] w-[48px] flex justify-center items-center bg-white'><img className='min-w-[20px]' src={FaceForm} alt="" /></button>
                </ul>
                <p className='font-medium text-[16px] mt-8 mb-2'><span className='cursor-pointer text-blue underline'>Crie uma conta</span> Battle.net de graça</p>
                <p className='font-medium text-[16px]'><span className='cursor-pointer text-blue underline'>Não consegue logar?</span></p>
            </div>
        </div>
    </div>
  )
}

export default Hero