import React, { useState } from "react";
import ForwardIcon from "@mui/icons-material/Forward";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SendIcon from "@mui/icons-material/Send";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Style.css";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { data, commentPerson } from "./StreamData";
import classdata from "./classdata";
import { useGlobalContext } from "../context";

import axios from "axios";
import { useEffect } from "react";

import { viewAllPost } from "../Service/postAPI";
import { useParams } from "react-router-dom";
import NavBarClass from "./NavBarClass";

const Stream = () => {
  const options = ["Edit", "Delete"];
  const { classid, isteacher, setisteacher } = useGlobalContext();

  const post=[{}];
  // const classid = 1;
  const [data1, setdata1] = useState(data);
  const [classdata1, setclassdata1] = useState(classdata);
  const [classarray, setclassarray] = useState([]);

  const [postdata, setpostdata] = useState([]);

  const [postid, setpostid] = useState([]);
  const { id } = useParams();

  const [isopen, setisopen] = useState(false);

  const handleclose = () => {
    setisopen(false);
  };
  const handleEdit = () => {
    setisopen(false);
  };
  const handleDelete = () => {
    setisopen(false);
  };

  const handleApi8 = () => {
    axios
      .post("http://localhost:8086/viewAllPost", {
        class_id: 2,
      })
      .then((result) => console.log(result.data))
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

  const fetchPostid = async () => {
    const newarr = await classarray.map((curr) => {
      return curr.post_id;
    });
    //console.log(newarr)
    setpostid(newarr);
    console.log(postid);
  };
  const handleViewComment = (postid) => {
    axios
      .post("http://localhost:8086/AllCommentsOnPost", {
        post_id: postid,
      })

      .then((result) => {
        const vara=result.data
        setpostdata(result.data);
        console.log(postdata);
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
    //handleViewComment()
    fetchPostid();
    //handleApi8();
    //console.log(classarray)
    //viewPost();
  }, []);

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
              <MenuItem onClick={handleEdit}>Edit</MenuItem>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>{" "}
          </div>
        )}
        <h1 class="elements">{classarray?.title} </h1>
        <h3 class="elements">{classarray?.section} </h3>
      </div>
      <div class="flex">
        <div class="upcoming">
          <h3 class="a">Upcomming</h3>
          <p>wohoo! no work due soon!</p>
        </div>
        <div className="posts">
          {isteacher && (
            <div class="announcement">
              {" "}
              <div class="input">
                <i class="fa-solid fa-face-smile logo"></i>
                <input
                  className="in"
                  type="text"
                  placeholder="Announce something to your class"
                />
                <Button
                  sx={{ backgroundColor: "#75c9b7", ml: "-20px", mr: "7px" }}
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Post
                </Button>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    width: "20px",
                    marginRight: "10px",
                    backgroundColor: "#75c9b7",
                  }}
                >
                  <FileUploadIcon />
                  <input hidden accept="image/*" multiple type="file" />
                </Button>{" "}
              </div>
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
