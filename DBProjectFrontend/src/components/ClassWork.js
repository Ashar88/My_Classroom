import React, { useEffect, useState } from 'react'
import NavBarClass from './NavBarClass'
import './people.css'
import data from './assignmentData'
import { useGlobalContext } from '../context'
import { useNavigate, useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import axios from "axios";
import { Button, Modal,styled, TextField, Typography } from '@mui/material';
import { ContentCutOutlined } from '@mui/icons-material'

import { Link } from 'react-router-dom'

const StyleModal=styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})

const ClassWork = () => {
  const routeParams = useParams();
  const [assdata,setassdata]=useState(data);
  const{setassignId,assignId,isteacher,Session}=useGlobalContext();
  const [asstitle,setasstitle]=useState("");
  const [asstotalmark,setasstotalmark]=useState(100);
  const [assduedate,setassduedate]=useState("");
  const [assdes,setassdes]=useState("");

  const{id:classid}=useParams()
  const handleCreateAssign=()=>{
    CreateAssignmentAPI();
    console.log(Session.name);

    setopen(false)
  }

  const ViewAllAssignmentApi = () => {
    axios
      .post("http://localhost:8086/ViewAllAssignment", {
		"class_id": classid
	})
      .then((result) =>{ 

        console.log(result.data)
        setassdata(result.data);

      } )
      .catch((err) => console.log(err));
  };
  const CreateAssignmentAPI = () => {
    axios
      .post("http://localhost:8086/createAssignment", {
		"teacherUsername": Session.name ,
		"class_id": classid,
		"title": asstitle,
		"totalMarks":asstotalmark,
		"due_date":assduedate,
		"descript": assdes
	})
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };

     const nav=useNavigate();
  const [open,setopen]=useState(false)
     
     const NavToAssign=(courseid)=>{

        setassignId(courseid);

       nav(`/class/${classid}/classwork/${courseid} `);

        

     }

     useEffect(()=>{

      ViewAllAssignmentApi();

     },[])

     

  return (
    
    <div>


     
     <div className="section">
     <div class="teachers"><h1>ClassWork <i className="fa-sharp fa-solid fa-plus plus-btn " onClick={(e)=>{setopen(true)}}></i>
       <StyleModal
  open={open}
  onClose={(e)=>{setopen(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={500} bgcolor="white" p={3} borderRadius={5}  border="none">
    <Typography variant="h6" color="gray" textAlign="center"> Create Assignment</Typography>
    <TextField id="outlined-basic" placeholder="Enter Assignment Title" variant="outlined" sx={{width:"100%",marginTop:"23px"}} onChange={(e)=>{
    setasstitle(e.target.value)}} />
    
    <TextField id="outlined-basic" placeholder="Enter Assignment Total Marks" variant="outlined" sx={{width:"100%",marginTop:"23px"}} onChange={(e)=>{
    setasstotalmark(e.target.value)}} />
    
    <TextField id="outlined-basic" placeholder="Enter Assignment Description" variant="outlined" sx={{width:"100%",marginTop:"23px"}} onChange={(e)=>{
    setassdes(e.target.value)}} />
    
    <TextField id="outlined-basic" placeholder="Enter Due Date" variant="outlined" sx={{width:"100%",marginTop:"23px"}} onChange={(e)=>{
    setassduedate(e.target.value)}} />
    <Button sx={{marginTop:"10px"}} onClick={handleCreateAssign}> Submit</Button>
  </Box>
</StyleModal></h1></div></div>
       <div class="classwork">
       
       {/* {
        assdata.map((curr)=>{
          return <button className='bttnn' state={{from:"w"}} onClick={()=>{NavToAssign(curr.a_id)}} > <div class="c1"> <i class="fa-solid fa-file-arrow-up"></i>{curr.a_title} </div></button> 
        })
       } */}
       {

       assdata.map((curr)=>{
        

          return <Link to= {`/class/${classid}/classwork/${curr.a_id}`} className='bttnn' state={{from:{...curr}}} onClick={()=>{NavToAssign(curr.a_id)}} > <div class="c1"> <i class="fa-solid fa-file-arrow-up"></i>{curr.a_title} </div></Link> 
        })}
        
       
     </div>
    </div>
  )
}

export default ClassWork
