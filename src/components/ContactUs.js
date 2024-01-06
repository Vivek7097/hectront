import React from 'react'
import bgImg from '../images/_64435192-e2ad-44d7-b344-3ffa11f9469d.jpg'
import { LocationCityOutlined } from '@mui/icons-material'
import {BsTelephone} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactUs = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r2vcbye', 'template_zbx4dki', form.current, 'p1fY1jdOg_BWl-wbY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className=' overflow-y-hidden  w-[100%]'>
      <img src ={bgImg} className=' -z-10 absolute top-0 object-cover h-[160%]  w-[100%]'/>

      <div className=' md:flex gap-2 w-[95%] mx-auto mt-[7rem]  '>
        <div className='md:px-[7rem] md:pl-0 pl-5 mb-4'>
          <h3 className=' text-5xl font-roboto font-[600] text-white mb-9'>Get in touch</h3>

          <h4 className='text-2xl uppercase font-roboto font-[600] text-white mb-7'>New delhi</h4>
          <div className='bg-white w-10/12 h-[0.15rem]'></div>
          <div className='text-lg font-[500]'>
            <div>
              <LocationCityOutlined/>
              <p>R- 370,JOGA BAI EXT, Jamia Nagar OKHLA, New Delhi, South East Delhi, Delhi, 110025</p>
            </div>
            <div>
            <div className='flex gap-3 align-baseline'>
                <BsTelephone className='text-2xl mt-1 '/>
                <a href="tel:+917503539645">+91 7503539645</a>
            </div>
            <div className='flex gap-3 align-baseline'>
                <HiOutlineMail className='text-2xl mt-1'/>
                <a href="mailto:Hectront@gmail.com">Hectront@gmail.com</a>
            </div>
            </div>
          </div>
        </div>
       <div className='bg-white md:w-[60%]  md:p-[4rem] p-[3rem] h-[40rem] mb-10'>
          <h3 className='text-[1.5rem] font-roboto mb-4 font-[500]'>Looking for architecture or interior Design Services?</h3>
          <h3 className='text-3xl font-[600] mb-3'>Get a Free quote now</h3>

            <form className='flex flex-col gap-3' ref={form} onSubmit = {sendEmail}>

              <input  name='user_name' className='bg-[#f5f5f5] placeholder:pl-4 placeholder:text-[1.15rem]   h-[4rem] w-[100%]' placeholder='Name' required/>

              <input type='email' placeholder='Email' name='user_email' className='bg-[#f5f5f5] placeholder:text-xl placeholder:pl-4  h-[4rem] w-[100%]' required/>

              <input placeholder='Purpose' name='purpose' className='bg-[#f5f5f5] placeholder:text-xl placeholder:pl-4  h-[4rem] w-[100%]' required/>
              <textarea className='bg-[#f5f5f5] h-[6rem] placeholder:pl-4 placeholder:pt-1 placeholder:text-xl  w-[100%]' name='message' required placeholder="Hello, I'm interested in..." spellCheck="false" />
              <input type='submit' value="Send Message"  className=' hover:!bg-[#b9b6b6] active:!bg-[#c5c3c3] h-[3rem] w-[100%] font-roboto font-[600] !bg-[#f5f5f5] text-center'/>
            </form>

      </div>


      </div>
    </div>
  )
}

export default ContactUs