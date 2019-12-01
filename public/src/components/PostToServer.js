import React,{Component} from 'react';
import "../styles/takeARide.css";
import { withRouter } from 'react-router-dom'
import axios from "axios";

//posting to the  server
function PostToServer (props){
    console.log(props.userDetails);
    const userdata = {}
    userdata .email = props.userDetails.email 
    userdata .name  = props.userDetails.displayName
    axios.post("http://localhost:8000/user/auth",userdata)
    .then(() =>console.log("axios"))
    .catch((err) => console.log(err))
    return(null) 
}
 



export default PostToServer