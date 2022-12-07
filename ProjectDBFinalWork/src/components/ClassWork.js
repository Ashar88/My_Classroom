import React, { useEffect, useState } from 'react'
import NavBarClass from './NavBarClass'
import './people.css'
import data from './assignmentData'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'
const ClassWork = () => {

  const [assdata,setassdata]=useState(data);
  const{setassignId,assignId,classid}=useGlobalContext();
     const nav=useNavigate();
     const NavToAssign=(courseid)=>{

        setassignId(courseid);

       nav(`/class/${classid}/classwork/${courseid}`);

        

     }

     

  return (
    
    <div>
     <NavBarClass/>
     <div className="section">
     <div class="teachers"><h1>ClassWork</h1></div></div>
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
