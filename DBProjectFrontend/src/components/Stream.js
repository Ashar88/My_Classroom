import React, { useState } from 'react'
import ForwardIcon from '@mui/icons-material/Forward';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SendIcon from '@mui/icons-material/Send';
import './Style.css'
import { Button } from '@mui/material';
import {data,commentPerson} from './StreamData'
import classdata from './classdata'
import { useGlobalContext } from '../context';

import axios from 'axios';
import { useEffect } from 'react';


const Stream = () => {

    const {classid}=useGlobalContext();
    const [data1,setdata1]=useState(data);
    const [classdata1,setclassdata1]=useState(classdata);
    const [classarray,setclassarray]=useState('')
    const filterclass=()=>{

const newarr=classdata.filter((curr)=>{
        if (curr.id ==classid){
          setclassarray(curr.name)
          console.log(curr.id)
          
        }
      })

      
      

    }



    const handleApi = () => {
      axios
        .post("http://localhost:8086/createPost", {
          "teacherUsername": "haider92",
          "class_id": 2,
          "title": "react lecture No:3",
          "descript": "hello, Slides are attached below"
        })
        .then((result) => console.log(result.data))
        .catch((err) => console.log(err));
  
    };



    const handleApi3 = () => {
     const ans =  axios
        .put("http://localhost:8086/editPost", {
          "post_id": 21,
          "teacherUsername": "haider92",
          "class_id": 2,
          "title": "Null deliebrately",
          "descript": "NULL deliebrately"
        })
        .then((result) => console.log(result.data))
        .catch((err) => console.log(err));
  
        console.log(ans.data.data)
    };

    const handleApi4 = () => {
      const ans = axios
        .delete("http://localhost:8086/deletePost", {
            data: {
              "post_id": 1,
              "teacherUsername": "haider92"
          }
        })
        .then((result) => console.log(result.data))
        .catch((error) => console.log( error.response.data.message) );
  
        console.log(ans.data)
    };


    const handleApi2 = () => {
      axios
        .get("http://localhost:8086/viewAllPost", {
          params: {"class_id": 2}
        })
          .then((result) => console.log(result.data))
          .catch((error) => console.log( error.response.data.message) );
      
    };


        const handleApi8 = () => {
      axios
        .post("http://localhost:8086/viewAllPost_POST", {
          "class_id": 2,
        })
        .then((result) => console.log(result.data))
        .catch((err) => console.log(err));
  
    };




     useEffect(()=>{
         filterclass();

            //  handleApi();
            //  handleApi2();
            //  handleApi3();
            //  handleApi4();
             handleApi8();
     },[])



  return (
    <div><div class=" headerrr">
      <h1 class="elements"> {classarray}</h1>
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
           
             {
              commentPerson.map((curr)=>{
                return(
                  
                  <div>
                  <h6 class="co"><i class="fa-solid fa-user"></i> {curr.name}<span class="time">2:00pm</span></h6><p>{
                   curr.commentdata 
                  }.</p>
               </div> )

              })
             }
           
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