import { PhotoCamera } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react'
import UploadButton from './UploadButton'
import './ass.css'
import NavBarClass from './NavBarClass';
import { useEffect } from 'react';
const Assignment = () => {
    const [upload,setupload]=useState(true);

    
  return (

    <div>
    
      <div class="flexxx">
    <div class="asg-sec">
        <h2 class="text-primary line1">Assignment 01</h2>
        <div class="td">
            <span>Teacher name</span>
            <span>.Date</span>
         </div>
     
         <div class="pd">
             <span>100 points</span>
             <span>.Due date</span>
         </div>
 
         <div class="assignment">
            <div class="box"> 
           <span class="name">Assignment PDF</span>
           </div>
           </div>


           <div class="class-comments">
            <span><i class="fa-solid fa-user"></i>Class comments</span>
            <div class="comments">
                <input type="text" placeholder="Add class comments"/>
            </div>
        </div>
    </div>
    
    
   <div class="submission ">
     <h3>Your work</h3>
     <span>Status</span>
     {!upload &&<div class="upload">
        <span class="f">File name</span>
     </div>}
   { upload && <UploadButton/> }
    { ! upload && <button type="btn" class="btn btn-outline-primary">submit</button> }
    

        <div class="add-comment">
            <div class="heading"><i class="fa-solid fa-user"></i> <span>Private comments</span></div>
            <input type="text" placeholder="Add private comment"/>
         </div>
   </div>
   
</div>

    </div>
  )
}

export default Assignment
