import React,{Component} from 'react';
import "../styles/header.css"
import { withRouter, Link } from 'react-router-dom'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


class Header extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <header>
                    <div class="container1180">
                        <div class="flex flexJustifyBetween flexAlignItemsCenter flexNoWrap">
                            <div class="topLogo anchor">
                                <h1> <Link to='/'>Hop On</Link></h1>
                            </div>
                            <div class="menuSide flex flexJustifyEnd flexAlignItemsCenter">
                                <div class="headerMenu flex flexJustifyEnd flexAlignItemsCenter">
                                    <div className = "hmItem">  <Link to='/find/a/ride'>Find a ride </Link> </div>
                                    <div className = "hmItem">   <Link to='/search/a/ride'> Offer a ride</Link> </div>
                                    <div > <button type = "button "  className = "hmItem " > SignIn</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header