import React from 'react'
import heroImg from '../images/Hero1.jpg'
import Services from './Services'
import { useNavigate } from 'react-router-dom'


const HeroSection = () => {
  const navigate = useNavigate();
  return (
  <div className=''>   
    <div className='h-[400px] md:!h-[550px] overflow-y-hidden w-screen  overflow-x-hidden'>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            className='w-[50em] h-[500px] md:w-[100em] bg-transparent min-h-[31rem] bg-green-300 z-20 backdrop-opacity-0'
            width="1200.000000pt" height="628.00000pt" viewBox="0 0 1300.000000 400.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,628.000000) scale(0.100000,-0.100000)"
            fill="#e02835f8" stroke="none">
            <path d="M0 3050 l0 -1000 2966 0 2966 0 -108 115 c-60 63 -496 513 -969 999
            l-860 885 -1997 0 -1998 1 0 -1000z"/>
            </g>
        </svg>

        {/* <svg className='w-[100%] h-[30rem] absolute top-[23rem]  md:w-[100em] bg-transparent min-h-[31rem] bg-green-300 z-10 backdrop-opacity-0' width="500" height="150" xmlns="http://www.w3.org/2000/svg">
          
        <g>
          <title>Layer 1</title>
          <rect id="svg_1" height="142" width="341.99999" y="3.33333" x="0.99999" stroke="none" fill="#e02835f8"/>
          <path id="svg_2" d="m424.86997,279.33852l0.5,-1.30375l0.5,1.30375l-1.00001,0l0.00001,0z" stroke="none" fill="#e02835f8"/>
          <path id="svg_3" d="m342.78999,145.27666l0,-142l140.99998,142l-140.99998,0z" opacity="undefined" stroke="none" fill="#e02835f8"/>
        </g>

        </svg> */}

        {/* <svg 
             className='w-[60%]  absolute top-[33vh]   bg-transparent min-h-[31rem] bg-green-300 z-10 backdrop-opacity-0'
            width="466" height="121" viewBox="0 0 466 121" fill="#e02835f8" xmlns="http://www.w3.org/2000/svg">
            <rect width="315" height="121" fill="#e02835f8"/>
            <path d="M315 0L466 121H164L315 0Z" fill="#e02835f8"/>
        </svg> */}
        <h1 className='absolute z-20 text-[2.75rem]  md:text-[5rem] md:top-[21rem] top-[19rem] ml-2 md:!ml-6 font-roboto font-[700] text-white'>HECTRONT</h1>
        <p className='absolute z-20  md:!text-[1.5rem] md:!leading-9 text-sm top-[25rem] ml-2  md:top-[30rem] md:!ml-5 font-roboto font-[200]  text-black'>2D/3D CAD Modelling, MEP, Fire Fighting, Billing, <br/>BOQ preparation + Execution & Project Managemen.</p>
        <img src ={heroImg} className=' -z-10 absolute top-0 h-[100%] w-[100%] object-contian'/>
        <a className='relative text-[1.5rem] w-[150px]   h-[3rem] 
                    bg-[#e02835f8] md:bg-transparent  ml-[5rem] md:-right-[80%] md:-top-[3.5rem]  font-roboto border text-white border-white flex justify-center items-center  Button'>
          <span className='z-50' onClick={ () => {navigate('/contact')}} >
            Let's talk
          </span>
        </a>
    </div>
    <Services/>
  </div>
  )
}

export default HeroSection