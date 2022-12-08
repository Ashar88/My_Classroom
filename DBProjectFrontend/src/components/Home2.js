import React, { useState } from 'react'
import {useGlobalContext} from '../context'
import NavBarBox from './NavBarBox'
import Abc from './Abc'
import axios from "axios";
import Box from './Box'
import classdata from './classdata'
import { Link } from 'react-router-dom'
import './Box.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home2 = () => {
    const [stddata,setstddata]=useState([]);
    const[teacherdata,setteacherdata]=useState([])
     const{navbarb,setnavbarb,setclassid,classid,Session}=useGlobalContext();
     const nav=useNavigate();
     const handleClick=(courseid)=>{

        setclassid(courseid);
        nav(`/class/${courseid}`);

        

     }

     const FetchClassOfStudent =  () => {
     axios
      .post("http://localhost:8086/AllClassroomsOfStudent", {
        //class_id: id,

        "username":Session.name,
      })

      .then((result) => {
        //console.log(result.data)

        setstddata(result.data);
      })

      .catch((err) => console.log(err));
  };
   const FetchClassOfTeacher =  () => {
     axios
      .post("http://localhost:8086/AllClassroomsOfTeacher", {
        //class_id: id,

        "username":Session.name,
      })

      .then((result) => {
       // console.log(result.data)

        setteacherdata(result.data);
      })

      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    FetchClassOfStudent();
    FetchClassOfTeacher();
  },[])

  return (
    
    <div>
    
    <NavBarBox/>
    
    <div class="main1">
    {
        stddata.map((curr)=>{
            
            {/* return<Link to={`/class/${curr.id}`}> <Box key={curr.id} {...curr} /></Link> */}
            { return <button className='bttn' onClick={()=>{handleClick(curr.class_id)}}><Box key={curr.class_id} {...curr} /></button> }
        })

        


    }
    {
        teacherdata.map((curr)=>
        {
            
            {/* return<Link to={`/class/${curr.id}`}> <Box key={curr.id} {...curr} /></Link> */}
            { return <button className='bttn' onClick={()=>{handleClick(curr.class_id)}}><Box key={curr.class_id} {...curr} /></button> }
        })
    }
    
        </div>
    </div>
  )
}

export default Home2