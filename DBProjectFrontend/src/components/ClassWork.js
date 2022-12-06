import React, { useEffect, useState } from 'react'
import NavBarClass from './NavBarClass'
import './people.css'
import data from './assignmentData'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'

import { Button, Modal,styled, TextField, Typography } from '@mui/material';

const StyleModal=styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})
const ClassWork = () => {

  const [assdata,setassdata]=useState(data);
  const{setassignId,assignId,classid,isteacher}=useGlobalContext();

  const handleCreateAssign=()=>{
    setopen(false)
  }
     const nav=useNavigate();
  const [open,setopen]=useState(false)
     
     const NavToAssign=(courseid)=>{

        setassignId(courseid);

       nav(`/class/${classid}/classwork/${courseid}`);

        

     }

     

  return (
    
    <div>


     <NavBarClass/>
     <div className="section">
     <div class="teachers"><h1>ClassWork <i className="fa-sharp fa-solid fa-plus plus-btn " onClick={(e)=>{setopen(true)}}></i>
       <StyleModal
  open={open}
  onClose={(e)=>{setopen(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={200} bgcolor="white" p={3} borderRadius={5}  border="none">
    <Typography variant="h6" color="gray" textAlign="center"> Join Class</Typography>
    <TextField id="outlined-basic" placeholder="Enter Class Code" variant="outlined" sx={{width:"100%",marginTop:"23px"}} onChange={(e)=>{
    Set(e.target.value)}} />
    <Button sx={{marginTop:"10px"}} onClick={handleCreateAssign}> Submit</Button>
  </Box>
</StyleModal></h1></div></div>
       <div class="classwork">
       
       {
        assdata.map((curr)=>{
          return <button className='bttnn' onClick={()=>{NavToAssign(curr.id)}} > <div class="c1"> <i class="fa-solid fa-file-arrow-up"></i>{curr.name} </div></button> 
        })
       }
        
       
     </div>
    </div>
  )
}

export default ClassWork
