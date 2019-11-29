import React,{Component} from 'react';
import "../styles/header.css"
import { withRouter } from 'react-router-dom'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


class RideResult extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="container700 autocenter p9000">
                <div className="rideCard">
                    <div className="flexResponsive768">
                        <div className="flex1">
                            <div className="rcLabel">02:00</div>
                            <div className="rcLabel">09:10</div>
                        </div>
                        <div className="flexCent2"></div>
                        <div className="flex7">
                            <div className="flex flexJustifyBetween">
                                <div className="rcLabel">Bengaluru</div>
                                <div className="rcAmt">Rs.750.00</div>
                            </div>
                            <div className="flex flexJustifyBetween">
                                <div className="rcLabel">Coimbatore</div>
                            </div>
                        </div>
                    </div>