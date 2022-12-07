import React, { useEffect, useState } from 'react'
import './people.css';
import NavBarClass from './NavBarClass';
import dataa from './StudentData';
const People = () => {
const [data,setdata]=useState(dataa)
const [teachers,setteachers]=useState("");
const [isLoading,setLoading]=useState(false);
console.log(teachers);

// const fetchdata = async () => {
//     setLoading(true)
//     try {
//       const newArr=dataa.filter((c)=>{
//       return c.type=='Teacher'

//     })
//     setteachers(newArr);
//     setLoading(false)
      
//     } catch (error) {
//       setLoading(false)
//       console.log(error)
//     }
//   }
//   useEffect(()=>{
//     setdata(dataa)
//     fetchdata();
    
    


//   },[])
  console.log(teachers);
  return (
    <div>
     <NavBarClass/>
    {
        
    }
    
        <div className="section">
      <div className="teachers">
    <h1> Teachers</h1>
   {dataa.map((curr)=>{
      return <div className="t"><span> <i class="fa-solid fa-user"></i> {curr.name} </span></div>
    })}
     
    </div>
    <div className="students">
        <h1>Classmates</h1>
           {dataa.map((curr)=>{
      return <div className="s"><span><i className="fa-solid fa-user"></i> {curr.name} </span></div>
    })}
        
    </div>
     
   </div>
    </div>
  )
}

export default People