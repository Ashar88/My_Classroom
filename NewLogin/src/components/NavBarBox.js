import React from 'react'
import "./home.css";

const NavBarBox = () => {
  return (
    <div>
    <nav class="navbar ">       
   <div class="container-fluid">
    <ul class="navbar nav">
        <button type="button hamburger" class="navbar-toggle nav-item hamburger" data-toggle="collapse" data-target="#myNavbar">
            <i class="fa-solid fa-bars"></i>                      
        </button>
        <li class="nav-item"><a class="z-index-1 nav-link text-left" href="#">My ClassRoom</a></li>
        <li class="nav-item"><a class="nav-link" href="#"><i class="fa-sharp fa-solid fa-plus plus-btn "></i></a></li>
        <li class="nav-item"><button type="button" class="nav-link btn btn-danger id-btn" >ID</button></li>
    </ul>
   </div>
</nav>
<div class="options">
        <a href="#"><i class="fa-solid fa-list t"></i>   To-do</a>
        <a href="#"><i class="fa-regular fa-calendar c"></i>   Calender</a>
</div>


    
      
    </div>
  )
}

export default NavBarBox
