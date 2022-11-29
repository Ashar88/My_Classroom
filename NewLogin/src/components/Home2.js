import React, { useState } from 'react'
import {useGlobalContext} from '../context'
import NavBarBox from './NavBarBox'
import Box from './Box'
import classdata from './classdata'
import { Link } from 'react-router-dom'

const Home2 = () => {
    const [data,setdata]=useState(classdata);
     const{navbarb,setnavbarb}=useGlobalContext();
  return (
    
    <div>
    <NavBarBox/>
    <div class="main">
    {
        data.map((curr)=>{
            
            return<Link to={`/class/${curr.id}`}> <Box key={curr.id} {...curr}/></Link>
        })
    }
    
        </div>
    </div>
  )
}

export default Home2