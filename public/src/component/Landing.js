import React,{Component} from 'react';
import "../styles/header.css"
import { withRouter, Link } from 'react-router-dom'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class Landing extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <div class="heroBanner">
                    <img src="/banner.jpg" class="hbImg" />
                    <div class="hbBtnSec">
                    <a href="#" class="hbBtn">Find a ride</a>
                    </div>
                </div>
            </div>
        )
    }
}



export default Landing


