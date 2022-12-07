import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Abc from './Abc';
import People from './People';
import { useGlobalContext } from '../context';
import { TryRounded } from '@mui/icons-material';
import ClassWork from './ClassWork';

import './people.css'


const styles = {
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
}}
const pages = ['Stream', 'Classwork', 'People'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBarClass = () => {
 const [anchorElNav, setAnchorElNav] = React.useState(null);
 const {clickpeple,classid,setclickpeople,setclasswork,isclasswork}=useGlobalContext();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const links=[{name:"Stream",link:`/class/${classid}`},{name:"ClassWork",link:`/class/${classid}/classwork`}, {name:"People",link:`/class/${classid}/people`}]
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const[st,setst]=useState({name:"",link:""})
  const fetch=()=>{

  }
  
  const handleCloseNavMenu = (ind) => {
    if(ind=='2')
    {
      setclasswork(false)
        setclickpeople(true);
        
    }
    if(ind=='1')
    {

      setclickpeople(false)
      setclasswork(true)
      console.log(isclasswork)
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#75c9b7;" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          
          <Abc/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {
    color: '#247579',
    
}
            }}
          >
            ClassName
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              
            </IconButton>
            
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ClassNames a
          </Typography>
        
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            {links.map((curr,ind) => (
              <Button
                key={curr}
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              
               <Link to={curr.link} className='lin'> {curr.name}</Link> 
              </Button>
            ))}
          </Box>
            
         {//remove user menu
         }
        </Toolbar>
      </Container>
    </AppBar>
    
  );

}

export default NavBarClass