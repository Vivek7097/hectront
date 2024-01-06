import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { FiSidebar } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';


export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ul className=' text-[1.5rem] font-[200] font-roboto cursor-pointer'>
              <li className=' hover:underline ' onClick={ () => {navigate('/')}}>Home</li>
              <li className=' hover:underline '>About</li>
              <Link to="service" 
                  className=' hover:underline '
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500} >Service</Link>
              <li className=' hover:underline ' onClick={ () => {navigate('/contact')}}>Contact</li>
          </ul>
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><FiSidebar className=' md:hidden text-[2.25rem] font-[200] text-red-600  font-roboto cursor-pointer mt-1 -mr-4' /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <ul className='text-[1.5rem] font-[200] font-roboto cursor-pointer'>
              <li className=' hover:underline px-[2rem]  pt-[2rem]' onClick={ () => {navigate('/')}}>Home</li>
              <li className=' hover:underline px-[2rem]  py-[0.50rem] ' onClick={ () => {navigate('/about')}}>About</li>
              <li className=' hover:underline px-[2rem]  pt-[0.50rem]' onClick={ () => {navigate('/contact')}}>Contact</li>
          </ul>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}