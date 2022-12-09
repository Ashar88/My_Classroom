import React, { useState } from "react";
import ForwardIcon from "@mui/icons-material/Forward";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SendIcon from "@mui/icons-material/Send";
import Loader from "./Loader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Style.css";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material";
import { data, commentPerson } from "./StreamData";
import classdata from "./classdata";
import { useGlobalContext } from "../context";

import axios from "axios";
import { useEffect } from "react";

import { viewAllPost } from "../Service/postAPI";
import { useParams } from "react-router-dom";
import NavBarClass from "./NavBarClass";
import { Box } from "@mui/system";
const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});


const Stream = () => {
  const options = ["Edit", "Delete"];
  const [postiddelete,setpostiddelete]=useState("")
  const [deleteclass,setdeleteclass]=useState(false)
  const { classid } = useGlobalContext();
  const [isteacher, setisteacher] = useState(false);
  const Session = localStorage.getItem("user");

  const [editopenpost,seteditopenpost]=useState(false);
  const[editpostt,seteditpostt]=useState("")
  const[editpostd,seteditpostd]=useState("")
  const post = [{}];
  // const classid = 1;

  const [announcement, setannoucement] = useState("");
  const [data1, setdata1] = useState(data);
  const [classdata1, setclassdata1] = useState(classdata);
  const [classarray, setclassarray] = useState([]);
  const [editopen, seteditopen] = useState(false);
  const [postdata, setpostdata] = useState([]);
  const [date, setDate] = useState();

  const [postid, setpostid] = useState([]);
  const { id } = useParams();

  const [isopen, setisopen] = useState(false);

  const [editclassname, seteditclassname] = useState("");
  const [editclasstitle, seteditclasstitle] = useState("");
  const [editclasscode, seteditclasscode] = useState("");
  const [editclassDes, seteditclassDes] = useState("");
  const [uniquecode, setuniquecode] = useState("");

  //handleedit for class name edit
  const [render, setrender] = useState("");
  const handleEdit = () => {
    EditClassAPI();
    seteditopen(false);
  };
  const handleclose = () => {
    setisopen(false);
  };

  const handleDelete = () => {
    DeleteClassApi();
    setisopen(false);
  };

  

  const DeleteClassApi = () => {
    axios
      .delete("http://localhost:8086/DeleteClassroom", {
        class_id: id,
        TeacherUsername: Session,
      })
      .then((result) => {
        console.log(result.data)
        //setDate(!date)
      })
      .catch((err) => {
        console.log(id)
        console.log(err)
      } );
  };

  // const handleApi8 = () => {
  //   axios
  //     .post("http://localhost:8086/viewAllPost", {
  //       class_id: 2,
  //     })
  //     .then((result) => console.log(result.data))
  //     .catch((err) => console.log(err));
  // };

  const UniqueCodeAPI = () => {
    axios
      .post("http://localhost:8086/GetUniqueCodeOfClass", {
        class_id: id,
      })

      .then((result) => {
        setuniquecode(result.data);
      })

      .catch((err) => console.log(err));
  };
  const CreatePostAPI = () => {
    axios
      .post("http://localhost:8086/createPost", {
        teacherUsername: Session,
        class_id: id,
        title: announcement,
        descript: announcement,
      })

      .then((result) => {
        setDate(result.data);
        // console.log(result.data)
      })

      .catch((err) => console.log(err));
  };

















  
  const handleViewPost = async () => {
    await axios
      .post("http://localhost:8086/viewAllPost", {
        class_id: id,
      })

      .then((result) => {
        setclassarray(result.data);
      })

      .catch((err) => console.log(err));
  };
  const IsteacherOfclassAPI = () => {
    axios
      .post("http://localhost:8086/IsTeacherOfaClass", {
        class_id: id,
        TeacherUsername: Session,
      })

      .then((result) => {
        setisteacher(result.data);
      })

      .catch((err) => console.log(err));
  };

  const handleEditAPI = (post_id) => {
    EditPostAPI(post_id);
    seteditopenpost(false);
    console.log(editpostt)
    console.log(editpostd);
  };
  const EditPostAPI = (postId) => {
    axios
      .put("http://localhost:8086/editPost", {
        post_id: postId,
        teacherUsername: Session,
        class_id: id,
        title: editpostt,
        descript: editpostd,
      })

      .then((result) => {
         console.log(result.data);
        setDate(!date);
      })

      .catch((err) => console.log(err));
  };

  const handledeletePost=()=>{
    DeletePostAPI(postiddelete)
  }
  const DeletePostAPI = (postId) => {
    axios
      .delete("http://localhost:8086/deletePost", {
        post_id: postId,
        teacherUsername: Session,
      })

      .then((result) => {
        //console.log(result.data);
                console.log(result.data);
        setDate(!date);
      })

      .catch((err) => console.log(err));
  };
  const fetchPostid = async () => {
    const newarr = await classarray.map((curr) => {
      return curr.post_id;
    });
    //console.log(newarr)
    setpostid(newarr);
    // console.log(postid);
  };

  const EditClassAPI = () => {
    axios
      .put("http://localhost:8086/EditClassroom", {
        class_id: id,
        TeacherUsername: Session,
        name: "(edited)" + editclassname,
        title: editclasstitle,
        code: editclasscode,
        descript: "(edited)" + editclassDes,
      })

      .then((result) => {
        console.log(result.data);
        setDate(!date);
      })
      .catch((err) => console.log(err));
  };
  const handleViewComment = (postid) => {
    axios
      .post("http://localhost:8086/AllCommentsOnPost", {
        post_id: postid,
      })

      .then((result) => {
        const vara = result.data;

        return result.data;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    //        const filterclass=async ()=>{

    // const newarr=classdata.filter((curr)=>{
    //         if (curr.id ==id){

    //           //setclassarray(curr.name)
    //         setclassarray(curr);

    //       }
    //       // console.log(curr)
    //       //  console.log(id)

    //       })}

    // filterclass();
    handleViewPost();
    IsteacherOfclassAPI();
    // handleViewComment()
    //fetchPostid();

    
      UniqueCodeAPI();
      console.log("happy");
    
    //handleApi8();
    //console.log(classarray)
    //viewPost();
  }, [date]);

  //  const viewPost =async()=>{
  //   const json = {
  //       "class_id" : 2
  //    }
  //     let obj = await viewAllPost("2");
  //     console.log(obj.data)

  //       axios.post('/').then(response => {
  //     console.log(response.data);
  //     }).catch(error => {
  //     console.log(error.response.data);
  //     });
  //  }

  const ITEM_HEIGHT = 20;
  if(deleteclass)
  {
    return <Loader/>
  }
  return (
    <div>
    
      <div class=" headerrr">
      
      
        {isteacher && (
          <div>
          
            <Button
              onClick={() => {
                setisopen(!isopen);
              }}
            >
              <MoreVertIcon sx={{ color: "white" }} />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              sx={{ mt: "70px" }}
              open={isopen}
              onClose={handleclose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={(e) => {
                  seteditopen(true);
                }}
              >
                Edit
              </MenuItem>
              <StyleModal
                open={editopen}
                onClose={(e) => {
                  seteditopen(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  width={400}
                  height={600}
                  bgcolor="white"
                  p={3}
                  borderRadius={5}
                  border="none"
                >
                  <Typography variant="h6" color="gray" textAlign="center">
                    {" "}
                    Class Name
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    placeholder="Enter Class Name"
                    variant="outlined"
                    sx={{ width: "100%", marginTop: "23px" }}
                    onChange={(e) => {
                      seteditclassname(e.target.value);
                    }}
                  />
                  <Typography variant="h6" color="gray" textAlign="center">
                    {" "}
                    Class Title
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    placeholder="Enter Class Title"
                    variant="outlined"
                    sx={{ width: "100%", marginTop: "23px" }}
                    onChange={(e) => {
                      seteditclasstitle(e.target.value);
                    }}
                  />
                  <Typography variant="h6" color="gray" textAlign="center">
                    {" "}
                    Class Code
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    placeholder="Enter Class Code"
                    variant="outlined"
                    sx={{ width: "100%", marginTop: "23px" }}
                    onChange={(e) => {
                      seteditclasscode(e.target.value);
                    }}
                  />
                  <Typography variant="h6" color="gray" textAlign="center">
                    {" "}
                    Class Description
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    placeholder="Enter Class Description"
                    variant="outlined"
                    sx={{ width: "100%", marginTop: "23px" }}
                    onChange={(e) => {
                      seteditclassDes(e.target.value);
                    }}
                  />
                  <Button sx={{ marginTop: "10px" }} onClick={handleEdit}>
                    {" "}
                    Submit
                  </Button>
                </Box>
              </StyleModal>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>{" "}
          </div>
        )}
        <div className="heading2"><h1 >Welcome To Classroom</h1></div>
        <h1 class="elements">{classarray?.title} </h1>
        <h3 class="elements">{classarray?.section} </h3>
      </div>
      <div class="flex">
        {isteacher && (
          <div class="upcoming">
            <h3 class="a">Class Code</h3>
            <p>{uniquecode}</p>
          </div>
        )}
        <div className="posts">
          {isteacher && (
            <div class="announcement" >
              {" "}
              <i class="fa-solid fa-face-smile logo"></i>
              <input
                className="in"
                type="text"
                placeholder="Announce something to your class"
                onChange={(e) => {
                  setannoucement(e.target.value);
                }}
              />
              <Button
                sx={{
                  backgroundColor: "#75c9b7",
                  ml: "-20px",
                  mr: "0px",
                  width: "5%",
                }}
                variant="contained"
                endIcon={<SendIcon sx={{ width: "50%" }} />}
                onClick={() => {
                  CreatePostAPI();
                }}
              ></Button>
              {/* <Button
                  variant="contained"
                  component="label"
                  sx={{
                   
                   marginLeft:"0px",
                    width:"3%",
                    marginRight: "10px",
                    backgroundColor: "#75c9b7",
                  }}
                >
                  <FileUploadIcon />
                  <input hidden accept="image/*" multiple type="file" />
                </Button>{" "} */}
            </div>
          )}

          {/* VIEWPOST */}

          {classarray.map((curr) => {
            return (
              <div class="stream">
                <div class="stream-announcement">
                  <h6>
                    <i class="fa-solid fa-user"></i> {curr.username}{" "}
                    <span>{curr.date_created}</span>
                    <Button variant="outlined" size="small" sx={{float:"right",ml:"2%"}} onClick={()=>{seteditopenpost(true)}} >
                      Edit
                     </Button>
                     <StyleModal
                open={editopenpost}
                onClose={(e) => {
                  seteditopenpost(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  width={400}
                  height={600}
                  bgcolor="white"
                  p={3}
                  borderRadius={5}
                  border="none"
                >
                  <Typography variant="h6" color="gray" textAlign="center">
                    {" "}
                    Title
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    placeholder="Title"
                    variant="outlined"
                    sx={{ width: "100%", marginTop: "23px" }}
                   onChange={(e)=>{seteditpostt(e.target.value)}}
                    
                  />
                  <Typography variant="h6" color="gray" textAlign="center">
                    {" "}
                    Description
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    placeholder="Description"
                    variant="outlined"
                    sx={{ width: "100%", marginTop: "23px" }}
                     onChange={(e)=>{seteditpostd(e.target.value)}}
                  />
                 
                  <Button sx={{ marginTop: "10px" }} onClick={()=>{handleEditAPI(curr.post_id)}}>
                    {" "}
                    Submit
                  </Button>
                </Box>
              </StyleModal>
                   <Button variant="outlined" size="small" sx={{float:"right"}}  onClick={()=>{DeletePostAPI(curr.post_id)}}>
                     Delete
                  </Button>
                  </h6>
                  <h1>{curr.title}</h1>
                  <p>{curr.descript}</p>
                </div>
                <div class="class-comments stream-comments">
                  {/* {commentPerson.map((curr) => {
                    return (
                      <div>
                        <h6 class="co">
                          <i class="fa-solid fa-user"></i> {curr.name}
                          <span class="time">2:00pm</span>
                        </h6>
                        <p>{curr.commentdata}.</p>
                      </div>
                    );
                  })} */}

                  <div class="comments">
                    <input type="text" placeholder="Add class comments" />
                    <i class="fa-solid fa-circle-arrow-right bg-secondary text-white"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stream;
