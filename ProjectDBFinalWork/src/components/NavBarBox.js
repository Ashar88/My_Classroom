import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import "./home.css";
import Abc from './Abc';
import { Button, Modal,styled, TextField } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { Style } from '@mui/icons-material';
import { ButtonUnstyled } from '@mui/base';

const StyleModal=styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})
const NavBarBox = () => {
  const [open,setopen]=useState(false)
  const {setissidebaropen,issidebaropen}=useGlobalContext();

  const [classcode,setclasscode]=useState("")
  return (
    <div>
    <nav className="navbar ">       
   <div className="container-fluid">
    <ul className="navbar nav">
        <button type="button hamburger" className="navbar-toggle nav-item hamburger" data-toggle="collapse" data-target="#myNavbar">
            <Abc/>                   
        </button>
        <li className="nav-item"><a className="z-index-1 nav-link text-left" href="#">My ClassRoom</a></li>
        { <li className="nav-item1" onClick={(e)=>{setopen(true)}} >
         <i className="fa-sharp fa-solid fa-plus plus-btn "></i></li> }
       <StyleModal
  open={open}
  onClose={(e)=>{setopen(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={200} bgcolor="white" p={3} borderRadius={5}  border="none">
    <Typography variant="h6" color="gray" textAlign="center"> Join Class</Typography>
    <TextField id="outlined-basic" placeholder="Enter Class Code" variant="outlined" sx={{width:"100%",marginTop:"23px"}} onChange={(e)=>{
    setclasscode(e.target.value)}} />
    <Button sx={{marginTop:"10px"}}> Submit</Button>
  </Box>
</StyleModal>
        {/* <li className="nav-item"><button type="button" className="nav-link btn btn-danger id-btn" >ID</button></li> */}
    </ul>
   </div>
</nav>
<div className="options">
        <a href="#"><i className="fa-solid fa-list t"></i>   To-do</a>
        <a href="#"><i className="fa-regular fa-calendar c"></i>   Calender</a>
</div>


    
      
    </div>
  )
}

export default NavBarBox
