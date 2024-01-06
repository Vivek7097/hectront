
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import {Helmet} from 'react-helmet'


function App() {
  return (
    <div className='box-border p-0 m-0 w-screen overflow-hidden '>
      <Navbar/>
          <Helmet>
            <title>Hectront</title>
            <meta 
              name='description'
              content='2D/3D CAD Modelling, MEP, Fire Fighting, Billing, BOQ preparation + Execution & Project Managemen.'  
            />
            <meta
              name='keywords'
              content='2D/3D CAD Modelling, MEP, Fire Fighting, Billing,
              BOQ preparation + Execution, Project Managemen'
            />
          </Helmet>
      <Routes>
          
          <Route path='/' element ={<HeroSection/>} />
          <Route path='contact' element ={<ContactUs/>} />
          <Route path='about' element ={<AboutUs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
