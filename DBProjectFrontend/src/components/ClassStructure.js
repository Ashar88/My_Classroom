import React, { useEffect } from 'react'
import People from './People'
import NavBarClass from './NavBarClass'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom';
import ClassWork from './ClassWork';
const ClassStructure = () => {
    const {navbarb,setnavbarb,classid,clickpeople,isclasswork}=useGlobalContext();
    const nav=useNavigate();
    console.log(classid)

    useEffect(()=>{
    <ClassStructure/>
    },[isclasswork,clickpeople])
  return (
    <div>
   
   
    <NavBarClass/>
    
    {
      
         clickpeople?(nav(`/class/${classid}/people`)):"" 
       
    }
    {
      
       isclasswork?(nav(`/class/${classid}/classwork`)):""
    }
    {
      console.log(isclasswork)
    }
      
    </div>
  )
}

export default ClassStructure
