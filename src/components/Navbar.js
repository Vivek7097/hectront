import { ViewSidebar } from '@mui/icons-material';
import React from 'react'
import { FiSidebar } from 'react-icons/fi';
import { useHref, useNavigate } from 'react-router-dom'
import {Link} from 'react-scroll'
import TemporaryDrawer from './TemporaryDrawer';

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <div className='  flex mx-[2rem] pt-[1rem] justify-between  transition-all duration-200'>
        <div onClick={ () => {navigate('/')}} className=' cursor-pointer bg-[#e02835f8] p-[4px] -ml-[1em] rounded-sm flex justify-center items-center sm:mt-3  text-[24px] text-white font-[900] font-roboto '>Hectront</div>
        <ul className='hidden md:flex justify-between w-[35rem]  text-[1.5rem] font-[200] font-roboto cursor-pointer'>
            <li className=' hover:underline ' onClick={ () => {navigate('/')}}>Home</li>
            <li className=' hover:underline ' onClick={ () => {navigate('/about')}}>About</li>
            <Link to="service"
                onClick={ () => {navigate('/')}} 
                className=' hover:underline '
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} >Service</Link>
            <li className=' hover:underline ' onClick={ () => {navigate('/contact')}}>Contact</li>
        </ul>
        <div className='md:hidden -mr-[2rem]'>
            <TemporaryDrawer/>
        </div>
            {/* <FiSifdebar className=' md:hidden text-[2.25rem] font-[200] font-roboto cursor-pointer mt-1 -mr-4' /> */}
    </div>
  )
}

export default Navbar