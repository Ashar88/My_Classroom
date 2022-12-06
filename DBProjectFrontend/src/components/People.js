import React, { useEffect, useState } from 'react'
import './people.css';
import SendIcon from '@mui/icons-material/Send';
 import { useGlobalContext } from '../context';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import NavBarClass from './NavBarClass';
import dataa from './StudentData';
const People = () => {
const [data,setdata]=useState(dataa)
const [teachers,setteachers]=useState("");
const [isLoading,setLoading]=useState(false);
const [isopen,setisopen]=useState(false)
 const {classid,isteacher,setisteacher}=useGlobalContext();
console.log(teachers);
 const handleclose=()=>{
      setisopen(false)
    }
    const handleEdit=()=>{
      setisopen(false)
    }
     const handleDelete=()=>{
      setisopen(false)
    }

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
      return( <div className="s"><span><i className="fa-solid fa-user " ></i> <div style={{display:"inline"}}> {curr.name} </div>
      {isteacher && <div style={{display:"inline"}}><Button
        
        onClick={()=>{setisopen(!isopen)}}
      >
        <MoreVertIcon sx={{color:'#ac0303'}} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        sx={{mt:'400px',ml:"450px"}  }
        open={isopen}
        onClose={handleclose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        
      </Menu> </div>} </span></div>)
    })}
        
    </div>
     
   </div>
    </div>
  )
}

export default People