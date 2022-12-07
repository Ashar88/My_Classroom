import { PhotoCamera } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react'
import UploadButton from './UploadButton'
import './ass.css'
import data from './assignmentData'
import NavBarClass from './NavBarClass';
import { useEffect } from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
const Assignment = ({name,id}) => {
    const [upload,setupload]=useState(true);
    const[comment,setcomment]=useState("");

    
  return (
    

    <div>
    
      <div class="flexxx">
    <div class="asg-sec">
        <h2 class="text-primary line1">Assignment1</h2>
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

          <form>
           <div class="class-comments">
            <span><i class="fa-solid fa-user"></i>Class comments</span>
            <div class="comments">
                <input type="text" placeholder="Add class comments" onChange={(e)=>{setcomment(e.target.value)}}/>
            <button  className='btn'><DoubleArrowIcon/></button>
          <span class="comments-quantity"><i class="fa-solid fa-user"></i> 2 Class comments</span>
            <h6 class="co"><i class="fa-solid fa-user"></i> Ashar <span class="thin">4:30pm</span></h6><p className='bo'>I am ASHAR ,and I like to interfere at every matter.</p>
            
            </div>


        </div>
        </form>

    </div>
    
    
   <div class="submission ">
     <h3>    Your work </h3>
     <span>Status</span>
     {!upload &&<div class="upload">
        <span class="f">File name</span>
     </div>}
   { upload && <UploadButton/> }
    { ! upload && <button type="btn" class="btn btn-outline-primary">submit</button> }
    

        
   </div>
   
</div>

    </div>
  )
}

export default Assignment
