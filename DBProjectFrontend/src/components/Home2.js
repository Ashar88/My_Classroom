import React, { useState } from 'react'
import {useGlobalContext} from '../context'
import NavBarBox from './NavBarBox'
import Abc from './Abc'
import Box from './Box'
import classdata from './classdata'
import { Link } from 'react-router-dom'
import './Box.css'
import { useNavigate } from 'react-router-dom';

const Home2 = () => {
    const [data,setdata]=useState(classdata);
     const{navbarb,setnavbarb,setclassid,classid}=useGlobalContext();
     const nav=useNavigate();
     const handleClick=(courseid)=>{

        setclassid(courseid);
        nav(`/class/${courseid}`);

        

     }
  return (
    
    <div>
    <NavBarBox/>
    
    <div class="main">
    {
        data.map((curr)=>{
            
            {/* return<Link to={`/class/${curr.id}`}> <Box key={curr.id} {...curr} /></Link> */}
            { return <button className='bttn' onClick={()=>{handleClick(curr.id)}}><Box key={curr.id} {...curr} /></button> }
        })
    }
    
        </div>
    </div>
  )
}

export default Home2