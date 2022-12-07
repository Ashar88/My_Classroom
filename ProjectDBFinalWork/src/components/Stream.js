import React, { useState } from 'react'
import ForwardIcon from '@mui/icons-material/Forward';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SendIcon from '@mui/icons-material/Send';
import './Style.css'
import { Button } from '@mui/material';
import data from './StreamData'
const Stream = () => {

    const [data1,setdata1]=useState(data);
  return (
    <div><div class=" headerrr">
      <h1 class="elements"> Demo Class Name</h1>
      <h3 class="elements">SECTION </h3>
    </div>
<div class="flex">
<div class="upcoming">
     <h3 class="a">Upcomming</h3>
     <p>wohoo! no work due soon!</p>
</div>
<div class="announcement" >
    <div class="input"><i class="fa-solid fa-face-smile logo"></i><input type="text"  placeholder="Announce something to your class"/><Button sx={{backgroundColor:"#75c9b7",ml:"-20px",mr:"7px"}} variant="contained" endIcon={<SendIcon />}>
  Post
</Button>
<Button variant="contained" component="label" sx={{width:"20px",marginRight:"10px",backgroundColor:"#75c9b7"}}>
  <FileUploadIcon/>
  <input hidden accept="image/*" multiple type="file" />
</Button> </div>
   
   
   { data.map((curr)=>{
   return (<div class="stream">
        <div class="stream-announcement">
           <h6><i class="fa-solid fa-user"></i> {
            curr.teacher
           } <span>Nov,28</span></h6>
            <p>{
                curr.postData
            }
        </p>
        </div>
        <div class="class-comments stream-comments">
           
             <h6 class="co"><i class="fa-solid fa-user"></i> K200346 Umer Hussain<span class="time">2:00pm</span></h6><p>Acknowledged!.</p>
           
             <div class="comments">
                 <input type="text" placeholder="Add class comments"/><i class="fa-solid fa-circle-arrow-right bg-secondary text-white"></i>
             </div>
         </div>
       </div>)
    })}
    
       
   
</div>
</div>
</div>
  )
}

export default Stream