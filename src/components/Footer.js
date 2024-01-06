import React from 'react'
import {BsArrowRight, BsFilePdf} from 'react-icons/bs'
import {FiFacebook} from 'react-icons/fi'
import {TfiYoutube} from 'react-icons/tfi'
import {AiFillLinkedin} from 'react-icons/ai'
import {SlSocialTwitter} from 'react-icons/sl'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import file from "../images/Presentation.pdf"


const Footer = () => {
  return (
    <div className='bg-black w-[100%] md:h-[250px] overflow-hidden pb-[2rem]'>
        {/* <div className='text-white text-center flex-[0.25]'>
            <p className='flex align-baseline text-[3em] justify-center items-center gap-5 py-6 font-roboto'>Contact Us <BsArrowRight  className='mt-'/></p>
            <div className=' w-[95%] h-[1px] mx-auto bg-white opacity-40 '></div>
        </div> */}
        <div className=' grid md:grid-cols-4 flex-[0.75]'>
            <div className=''>
                    <div className='bg-[#e02835f8] ml-[2.5rem] mt-[2rem] w-[8.5rem] text-center py-1 rounded-sm text-[2rem] text-white font-[900] font-roboto '>Hectront</div>
            </div>
            <div className='flex ml-[2.5rem] md:!-ml-[5rem] leading-loose pr-[2rem] font-roboto font-[400]  text-white  mt-[2rem] '>
                <p>Hectront is the Principal
                    holding firm for a
                    diversified portfolio of
                    business in 2D/3D CAD Modelling, MEP, Fire Fighting, Billing, BOQ
                    preparation + Execution
                    & Project Management. We
                    have presence in Pan
                    India
                    <br/>
                    <a href={file} download="File" className='   underline underline-offset-4 flex align-baseline '> Download pdf <span className='text-red-600 text-xl pt-2 pl-2 '><BsFilePdf/></span></a>
                    
                </p>

                <div className='w-[1px] h-[90%] bg-white ml-4 opacity-40 hidden md:block'></div>
            </div>
            <div className='flex font-roboto font-[400] leading-[2rem] text-white text-justify mt-[2rem]'>
                <div className='ml-[2.5rem] md:-ml-5'>
                    <h3 className='text-xl'>Contact us</h3>
                    <div className='flex gap-3 align-baseline'>
                        <HiOutlineMail className='text-2xl mt-1'/>
                        <a href="mailto:Hectront@gmail.com">Hectront@gmail.com</a>
                    </div>
                    <div className='flex gap-3 align-baseline'>
                        <BsTelephone className='text-2xl mt-1 '/>
                        <a href="tel:+917503539645">+91 7503539645</a>
                    </div>
                </div>
                <div className='w-[1px] h-[90%] bg-white ml-20 opacity-40 hidden md:block'></div>
            </div>
            <div className='text-xl ml-[2.5rem] md:-ml-4 font-roboto font-[400] leading-[2rem] text-white text-justify mt-[2rem]'>
                <p>Follow Us</p>
                <ul className='flex flex-wrap gap-8  text-[1.5rem] mt-[15px]'>
                    <li className=' cursor-pointer' href = ""><FiFacebook/></li>
                    <li><TfiYoutube/></li>
                    <li className=' cursor-pointer ' ><a href="https://www.linkedin.com/in/sahid-hussain-855489297/"><AiFillLinkedin/></a></li>
                    <li><SlSocialTwitter/></li>
                </ul>
            </div>
        </div>

        <p className='text-white text-center opacity-40 pt-5 md:pt-0 '>© 2023 Hectront All Rights Reserved.</p>
    </div>
  )
}

export default Footer