import React from 'react'
import aboutUs from '../images/pexels-pixabay-262367.jpg'

const AboutUs = () => {
  return (
    <div className= ' overflow-x-hidden overflow-y-hidden h-[31rem] w-[100%] py-[10rem]'>
        <img src ={aboutUs} className=' -z-10 absolute top-0 h-[100%] w-[100%] '/>
        <div className='z-10 w-[90%] -mt-[8rem] h-[27rem] mx-auto no-scrollbar'>
          <p className='font-[900] text-white font-roboto text-[4rem]'>About Us</p>
          <div className='md:w-[100%] h-[80%] md:ml-[2rem] text-justify scroll-auto overflow-y-scroll no-scrollbar md:overflow-y-hidden md:hover:overflow-y-scroll md:!no-scrollbar1'>
            <p className='text-white font-[600] text-lg md:w-[50%] ' >    
Hectront is a leading Principal holding firm that boasts a diverse portfolio of businesses across various sectors. With expertise in areas such as Billing, MEP (mechanical, electrical, and plumbing), 2D/3D modeling CAD, BOQ (bill of quantities) preparation and execution, and project management, Hectront is well-equipped to offer comprehensive solutions to clients.

MEP, another important domain for Hectront, entails the designing, installation, and maintenance of critical systems in buildings, including electrical, mechanical, and plumbing components. With their extensive knowledge and experience in this field, Hectront is able to deliver top-notch MEP services, ensuring the smooth operation of building infrastructure.

Hectront's proficiency in 2D/3D modeling CAD allows them to create detailed and realistic representations of architectural designs and construction plans. This enables clients to visualize their projects more effectively and make informed decisions during the planning and development stages.

In addition, Hectront specializes in BOQ preparation and execution, which involves estimating the quantities and costs of materials required for a project. Their accurate and comprehensive BOQ services assist clients in budgeting, procurement, and project management.

With a strong presence throughout India, Hectront has established itself as a trusted and reliable partner in the construction and engineering industry. Their commitment to excellence, combined with a diverse range of services, ensures that clients receive tailored and high-quality solutions for their specific needs.

In conclusion, Hectront's extensive portfolio of businesses in billing, MEP, 2D/3D modeling CAD, BOQ preparation and execution, and project management showcases their versatility and expertise in the construction and engineering sectors. With a pan-India presence, Hectront is well-positioned to cater to a wide range of clients and deliver effective solutions to support their business goals.
            </p>
          </div>
        </div>
        
    </div>
  )
}

export default AboutUs