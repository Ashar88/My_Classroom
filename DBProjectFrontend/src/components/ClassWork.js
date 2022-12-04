import React, { useState } from 'react'
import NavBarClass from './NavBarClass'
import './people.css'
import data from './assignmentData'
const ClassWork = () => {

  const [assdata,setassdata]=useState(data);


  return (
    
    <div>
     <NavBarClass/>
     <div className="section">
     <div class="teachers"><h1>ClassWork</h1></div></div>
       <div class="classwork">
       {
        assdata.map((curr)=>{
          return <div class="c1"><i class="fa-solid fa-file-arrow-up"></i><a href="classwork example .html"> {curr.name}</a></div>
        })
       }
        
       
     </div>
    </div>
  )
}

export default ClassWork
