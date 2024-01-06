import React from 'react'
import m1 from '../images/pexels-jane-doan-1024248.jpg'
import Marquee from "react-fast-marquee";
import xero from '../images/xero-removebg-preview.png'
import gianis from '../images/gianis-removebg-preview.png'
import hilti from '../images/hilti-removebg-preview.png'
import supertech from '../images/supertech-removebg-preview.png'
import fimg from '../images/fImg.PNG'
import van from '../images/Vanheusen.png'
import AaStudio from '../images/AA_studio.jpg'


            

const BOQ = () => {
  return (
    <div className='block overflow-clip py-5 bg-[#f6f5f1] '>
        <h2 className=' my-4 font-roboto pl-[1rem] font-[500] text-5xl'>About Us</h2>
        <div className='px-[10px] md:flex w-[90%] gap-4 mx-auto  '>
          <div className='flex-[0.6]'>
              <img src = {m1} className='md:!h-[32rem] object-cover flex-[0.5] border md:shadow-2xl md:p-[2rem]'/>
          </div>
          <div className=' flex-[0.4] py-[2rem] '>
             <p className='  md:-mt-7 md:!text-[1.25em] md:!leading-7 text-xl md:pl-[1em] '>Hectront is a principal holding firm with a diverse portfolio in various sectors. They specialize in Billing, Fire Fighting, MEP (mechanical, electrical, and plumbing), 2D/3D modeling CAD, BOQ (bill of quantities) preparation and execution, and project management. Their expertise in MEP involves designing, installing, and maintaining critical systems in buildings. Hectront’s proficiency in 2D/3D modeling CAD allows for detailed architectural designs and construction plans. They also offer BOQ services for estimating project materials and costs. With a strong presence in India, Hectront is a trusted partner in the construction and engineering industry, providing tailored and high-quality solutions to clients. </p>
          </div>
        </div>

        <img src ={fimg} className='py-[2rem]'/>


    {/* our Client */}
        <h3 className='my-[3rem] text-center font-[700] text-[2.5rem] '>Our clients</h3>
        <Marquee className=' flex mx-auto '>
          <img src={supertech} className='mx-[4rem] h-[7rem] '/>
          <img src={hilti} className=' h-[7rem] mx-[4rem]'/>
          <img src = {gianis} className=' h-[7rem] mx-[4rem]'/>
          <img src = {xero} className=' h-[7rem] mx-[4rem]'/>
          <img src = {van} className=' h-[7rem] mx-[4rem]'/>
          <img src = {AaStudio} className=' h-[7rem] mx-[4rem]'/>
        </Marquee>
        
    </div>
  )
}

export default BOQ