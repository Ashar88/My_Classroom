import React from 'react'
import "./home.css"
import NavBarBox from './NavBarBox'
const Box = ({id,name,teacher,section}) => {
  return (
    <div>
    

<div class="classes">
        <div class="header " id="one">
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
