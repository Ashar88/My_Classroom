import React, { useState } from 'react'
import "./Style.css";
import axios from 'axios';
import { useEffect } from 'react';
 
const Comments = ({post_id}) => {

    const [commentsdata,setcommetsdata]=useState([{commentid:"",
		postid:"",
		commenttime:"",
		comment_text:"" ,
		commentbystdusername:"",
		commentbyteacherusername:"" }])
    const handleViewComment = (postid) => {
    axios
      .post("http://localhost:8086/AllCommentsOnPost", {
        post_id: postid,
      })

      .then((result) => {
        console.log( result.data);
       

        
        // result.data.map((curr)=>{
        //     const [{comment_id ,
		// post_id ,
		// comment_time ,
		// comment_text, 
		// comment_by_std_username,
		// comment_by_teacher_username }] = curr;

        // setcommetsdata([{}])
        // })
        // console.log(commentsdata)
    })
    //     setcommetsdata({commentid:comment_id,
	// 	postid:post_id,
	// 	commenttime:comment_time,
	// 	comment_text:comment_text ,
	// 	commentbystdusername:comment_by_std_username,
	// 	commentbyteacherusername:comment_by_teacher_username })

    //     console.log( commentsdata);
    //   })

      .catch((err) => console.log(err));
  };

  useEffect(()=>{
handleViewComment(post_id)
  },[])
  return (
    <div>
    {
        commentsdata?.map((curr)=>{
            return(
                <div>
                <h6 class="co">
                          <i class="fa-solid fa-user"></i>{curr.commentbystdusername}
                          <span class="time">2:00pm</span>
                        </h6>
                        <p>Hello.</p> </div>
         ) })
    }
                        
                      

    </div>
  )
}

export default Comments