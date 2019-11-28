import React,{Component} from 'react';
import "../styles/takeARide.css";
import { withRouter } from 'react-router-dom'
import axios from "axios";


function PostToServer (props){
    console.log(props.userDetails);
    axios.post("http://localhost:8000/user/auth",props.userDetails)
    .then(() =>console.log("axios"))
    .catch((err) => console.log(err))
    return(null)
}



export default PostToServer