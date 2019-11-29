import React,{Component} from 'react';
import "../styles/header.css"
import { withRouter, Link } from 'react-router-dom'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import logo from '../asset/banner.jpg'; 


class Landing extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <div className="heroBanner">
                    <img src={logo} className="hbImg" />
                    <div className="hbBtnSec">
                        <Link to='/find/a/ride' className="hbBtn" > Find a ride </Link>
                    </div>
                </div>
            </div>
        )
    }
}



export default Landing


