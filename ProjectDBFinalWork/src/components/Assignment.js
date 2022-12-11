import { PhotoCamera } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react'
import UploadButton from './UploadButton'
import axios from "axios";
import { useParams } from 'react-router-dom';
import './ass.css'
import { useLocation } from 'react-router-dom';
import data from './assignmentData'
import NavBarClass from './NavBarClass';
import { useEffect } from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
const Assignment = ({name,id}) => {
    const [upload,setupload]=useState(true);
    // const [Grade,SetGrade]=useState([{std_username: "",
		// assign_id: "",
		// teacher_username:"" ,
		// class_id: "",
		// marks_obtained: ""}])

  //   const [grade,setgrade]=useState([{
	// 	std_username:"" ,
	// 	assign_id:"",
	// 	teacher_username:"",
	// 	class_id:"" ,
	// 	marks_obtained:""
	// }])
  const [grade,setgrade]=useState("")
    const[comment,setcomment]=useState("");
    const[isteacher,setisteacher]=useState(false);

    
    const Session=localStorage.getItem('user')
  const location=useLocation();

  
  const {from}=location.state
  //console.log(from);

 const IsteacherOfclassAPI =  () => {
     axios
      .post("http://localhost:8086/IsTeacherOfaClass",{
		"class_id": from.class_id,
		"TeacherUsername": Session
	})

  
      .then((result) => {


        setisteacher(result.data)
        
      })

      .catch((err) => console.log(err));
  };
  const ViewAssignGrade =  async() => {
     await axios
      .post("http://localhost:8086/ViewGrade",{
		"assignment_id": 38,
		"stdUsername": Session
	})

  
      .then((result) => {

        console.log(result.data)
       //setgrade(result.data)
        //setgrade(result.data)
        const [{std_username, assign_id, teacher_username, class_id, marks_obtained}]=result.data
        setgrade(marks_obtained)
  //      const {
	// 	std_username,
	// 	assign_id,
	// 	teacher_username,
	// 	class_id,
	// 	marks_obtained,
	// }=result.data

  // console.log(result.marks_obtained)
        
        
      })

      .catch((err) => console.log(err));
  };
  
    useEffect(()=>{
      //console.log(from.class_id)
    IsteacherOfclassAPI()
    ViewAssignGrade()
    },[])
  return (
    

    <div>
    
      <div class="flexxx">
    <div class="asg-sec">
        <h2 class="text-primary line1">Assignment </h2>
        <div class="td">
            <span>{from.username}  </span><br />
            <span>{from.date_created}</span>
         </div>
     
         <div class="pd">
             <span><b>Marks:</b>{from.total_marks}</span>
                          <span>
                           <b>Due Date:</b> 
                          {from.due_date  }<br></br></span>
                          <br />

         </div>
 
         <div class="assignment">
            <div class="box"> 
           <span class="name">{from.descript}</span>
           </div>
           </div>

          {/* <form>
           <div class="class-comments">
            <span><i class="fa-solid fa-user"></i>Class comments</span>
            <div class="comments">
                <input type="text" placeholder="Add class comments" onChange={(e)=>{setcomment(e.target.value)}}/>
            <button  className='btn'><DoubleArrowIcon/></button>
          <span class="comments-quantity"><i class="fa-solid fa-user"></i> 2 Class comments</span>
            <h6 class="co"><i class="fa-solid fa-user"></i> Ashar <span class="thin">4:30pm</span></h6><p className='bo'>I am ASHAR ,and I like to interfere at every matter.</p>
            
            </div>


        </div>
        </form> */}

    </div>
    
    
   {!isteacher&&<div class="submission ">
     <h3>    Your work </h3>
     <span>Status</span>
     {!upload &&<div class="upload">
        <span class="f">File name</span>
     </div>}
   { upload && <UploadButton/> }
    { ! upload && <button type="btn" class="btn btn-outline-primary">submit</button> }
    
    <div className="grademarks">  <h3>{grade && <div>Marks Obtained {grade} /{from.total_marks}</div>}</h3></div>
   {//console.log(grade)
   }
        
   </div>}
   
</div>

    </div>
  )
}

export default Assignment
