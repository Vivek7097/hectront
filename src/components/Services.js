import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BOQ from './BOQ';
import b1 from '../images/building2.jpg'
import b2 from '../images/pexels-pixabay-262367.jpg'
import { useNavigate } from 'react-router-dom';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className=' overflow-clip pb-10 bg-[#f6f5f1] overflow-x-hidden ' id='service'>
      <h2 className='text-5xl  pt-12 pl-4 -mb-[4rem] font-[500] border-none border-collapse'>Servies</h2>
      <div className='w-[90%] mt-20 mx-auto'>
        <Accordion sx={{bgcolor:'#f6f5f1', boxShadow:'none' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0, fontSize:'25px' }}>
                Consult
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Develop the strategy, budget and timeline to bring you vision to life</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className='bg-green-20 grid md:grid-cols-2   gap-y-6 font-roboto text-justify'>
                  <div className='px-[10px] hover:bg-[#98968e] transition-all duration-600 ' >
                    <h2 className=' text-2xl font-[600] mb-2'>Design & Build</h2>
                    <p className='mb-3'> Work with a single partner who takes responsibility for design concepts,
                        workplace, space planning, costing, contracting and fit-outs.
                    </p>
                    <div className='border[1.5] w-[98%] border-slate-400 border-b'></div>
                  </div>
                  <div  className='px-[10px] hover:bg-[#98968e] transition-all duration-600'>
                    <p className='text-[1.5rem] font-[600] mb-2 text-left '>Project Planning & Management</p>
                    <p className='mb-3'>Realise the full potential of you space or asset. Before you start work, complete defaultdiligence, 
                      feasibility studies, and cost and risk estimates.
                    </p>
                    <div className='border[1.5] w-[98%] border-slate-400 border-b'></div>
                  </div>
                  <div className='px-[10px] pb-[8px] md:hover:bg-[#98968e] transition-all duration-600'>
                    <h2 className='text-2xl font-[600] mb-6'>Interested in our Services?</h2>
                    <a className='px-5 py-2 border-black border font-[400] hover:bg-[#595853] transition-all duration-400 ' onClick={ () => {navigate('/contact')}}><span>Contact us</span></a>
                  </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  sx={{bgcolor:'#f6f5f1', boxShadow:'none', }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0, fontSize:'25px' }}>Design</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Create  a space that works for your culture, your people and your community.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className='bg-green-20 grid md:grid-cols-2  gap-y-6 font-roboto text-justify'>
                  <div className='px-[10px] hover:bg-[#98968e] transition-all duration-600 ' >
                    <h2 className=' text-2xl font-[600] mb-2'>Workplace strategy</h2>
                    <p className='pb-[2.5rem]'> Create a vision for your workplace that fosters innovation and ivolves business performance.
                    </p>
                    <div className='border[1.5] w-[98%] border-slate-400 border-b '></div>
                  </div>
                  <div  className='px-[10px] hover:bg-[#98968e] transition-all duration-600'>
                    <h2 className='text-2xl font-[600] mb-2'>Space Planning</h2>
                    <p className='mb-[13px]'>Explore and evalute your space design using immersive 3D technologies that bring your design. With 3D spce planse and virtual, 
                        you can understand how your new space will look before starting  to build.
                    </p>
                    <div className='border[1.5] w-[98%] border-slate-400 border-b'></div>
                  </div>
                  <div className='px-[10px] hover:bg-[#98968e] transition-all duration-600' >
                    <h2 className=' text-2xl font-[600] mb-2'>Design management for construction projects</h2>
                    <p className='mb-3'> Design is the process of creating a solution to a project brief and then preparing instructions allowing that solution to be constructed.  In order that project budgets can be satisfied, programmes achieved, and designs properly co-ordinated and communicated, the design process needs to be planned and controlled.
                    </p>
                    <div className='border[1.5] w-[98%] border-slate-400 border-b'></div>
                  </div>
                  <div  className='px-[10px] hover:bg-[#98968e] transition-all duration-600'>
                    <h2 className='text-2xl font-[600] mb-2'>Protfolio design</h2>
                    <p className='mb-[5.25rem]'>Our Proftfolio design team helps you bring design consistencey and efficiency 
                        to your place protfolio across multiple locations.
                    </p>
                    <div className='border[1.5] w-[98%] border-slate-400 border-b'></div>
                  </div>
                  <div className='px-[10px]  md:hover:bg-[#98968e] transition-all duration-600'>
                    <h2 className='text-2xl font-[600] mb-6'>Interested in our Services?</h2>
                    <a className='px-5 py-2 border-black border font-[400] hover:bg-[#595853] transition-all duration-400 ' onClick={ () => {navigate('/contact')}}><span>Contact us</span></a>
                  </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  sx={{bgcolor:'#f6f5f1',  boxShadow:'none'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0, fontSize:'25px'  }}>
              Manage
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className='bg-green-20 grid md:grid-cols-2 grid-rows-3 gap-y-6 font-roboto text-justify'>
                  <div className='px-[10px] hover:bg-[#98968e] transition-all duration-600' >
                    <h2 className=' text-2xl font-[600] mb-2'>Project Management</h2>
                    <p className='mb-4'> Transform your existing space ot turn your vision for a new space into reality.
                    </p>
                    <div className='border[1.5] w-[98%] border-slate-400 border-b '></div>
                  </div>
                  <div  className='px-[10px] hover:bg-[#98968e] transition-all duration-600'>
                    <h2 className='text-2xl font-[600] mb-2'>Development Management</h2>
                    <p className='mb-4'>Get great advice on master planning , project feasibility and financing.
                    </p>
                    <div className='border[1.5] w-[98%] border-slate-400 border-b'></div>
                  </div>
                  <div className='px-[10px] hover:bg-[#98968e] transition-all duration-600' >
                    <h2 className=' text-2xl font-[600] mb-2'>Relocation Management</h2>
                    <p className='mb-6'> Get support with logistics and planning, move phase and change Management.
                    </p>
                    <div className='border[1.5] w-[98%] border-slate-400 border-b'></div>
                  </div>
                  <div  className='px-[10px] hover:bg-[#98968e] transition-all duration-600'>
                    <h2 className='text-2xl font-[600] mb-2'>Program manangement</h2>
                    <p className='mb-6'>Manage multiple consurrent projects for consistent execution across your.
                    </p>
                    <div className='border[1.5] w-[98%] border-slate-400 border-b'></div>
                  </div>
                  <div  className='px-[10px] hover:bg-[#98968e] transition-all duration-600'>
                    <h2 className='text-2xl font-[600] mb-2'>Cost manangement</h2>
                    <p className='mb-3'>Identify & control all project expenses, then build and the cost plan, procurement and more.
                    </p>
                    <div className='border[1.5] w-[98%] border-slate-400 border-b'></div>
                  </div>
                  <div className='px-[10px] md:hover:bg-[#98968e] transition-all duration-600'>
                    <h2 className='text-2xl font-[600] mb-6'>Interested in our Services?</h2>
                    <a className='px-5 py-2 border-black border font-[400] hover:bg-[#595853] transition-all duration-400 ' onClick={ () => {navigate('/contact')}}><span>Contact us</span></a>
                  </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  sx={{bgcolor:'#f6f5f1',  boxShadow:'none'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0, fontSize:'25px'  }}>
              Build
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className='bg-green-20 font-roboto text-justify'>
                  <div className='px-[10px]   bg-[#f6f5f1] '>
                        <img src = {b1} className='md:h-[400px]  w-[100%] border object-cover shadow-2xl sm:object-contain md:object-fill '></img>
                        <h2 className=' my-4 font-roboto md:pl-3 font-[600] text-2xl text-left'>Existing Buildings Plan & RetroFitting</h2>
                        <p className=' text-xl text-justify'>Old heritage building needs special care to be in a position to preserve the custom, culture and
            dignity of the lively hood. We are more than happy to do such projects by creating 2D/3D CAD Plans
            Detail Building Health Report for necessary retrofitting of structure.</p>
                  </div>

                  <div className='px-[10px]  grid md:grid-cols-3'>
                      <div className='bg-[#f6f5f1] py-[2rem]'>
                          <h2 className=' my-4 font-roboto text-left font-[600] text-2xl'>BOQ (Bill of quantities)</h2>
                          <p className=' md:pl-[2.5rem] text-xl text-left'>Preparation of BOQ (Bill of quantities) includes all project items, descriptions, preambles and pricing of items. <br/> Contract management, M.O.M
          (method of measurements). Selected Materials specifications and datasheet to implement in BOQ and specifications. </p>
                      </div>
                      <img src = {b2} className='h-[100%] w-[90%]  border shadow-2xl col-span-2 p-[2rem] ml-[4rem] hidden md:block'></img>
                  </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <BOQ/>
    </div>
  );
}
