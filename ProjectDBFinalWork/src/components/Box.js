import React from 'react'
import "./home.css"
import NavBarBox from './NavBarBox'
import ColorGen from './ColorGen'
import { useEffect } from 'react'

const Box = ({id,name,teacher,section}) => {
   const { color, generateColor } 
            = ColorGen();
      
            useEffect(()=>{
              generateColor();
            },[])
           
  return (
    <div>
    

<div class="classes">
        <div class="header " id="one" style={{ 
      backgroundColor: "#" + color 
    }}>
            <span class="dot"><i class="fa-solid fa-ellipsis-vertical"></i></span>
          <h3>{name}</h3>
          <h6>{section}</h6>
          <p>{teacher}</p>
        </div>
    </div>
    </div>
  )
}

export default Box
