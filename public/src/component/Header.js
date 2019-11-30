import React,{Component} from 'react';
import "../styles/header.css"
import { withRouter, Link } from 'react-router-dom'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Login from "../components/Login"


class Header extends Component{
    constructor(){
        super()
        this.state = { 
            isSignedIn: false 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.clearLocalStorage = this.clearLocalStorage.bind(this)
    }


    handleSubmit(){

        this.props.history.push("/login")


        // this.setState(prevState => ({
        //     isSignedIn: !prevState.isSignedIn
        // }));

        // if(this.state.isSignedIn){
        //     this.clearLocalStorage()
        // }
        // else{
        //     this.props.history.push("/login")
        // }
        // console.log("state" + this.state.isSignedIn);

        // if(!this.state.isSignedIn){
        //     this.clearLocalStorage()
        // }
        // else{
        //     this.props.history.push("/ride/result")
        // }
    }

    // clearLocalStorage(){
    //     console.log( this.state.isSignedIn + "function executing");
    //     firebase.auth().signOut()
    // }

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
                                    <div className = "hmItem">  <Link to='/search/a/ride'> Offer a ride</Link> </div>
                                    {/* <button type="button" className = "frmBtn"  onClick = {this.handleSubmit  }> SignIn </button> */}
                                    <div className = "hmItem">  <Link to='/login'> SignIn </Link> </div>
                                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>

{/*                                     
                                    { (!this.state.isSignedIn)  ?
                                        (
                                            <button type="button" className = "frmBtn"  onClick = {this.handleSubmit}> SignIn </button>
                                        ):
                                        ( 
                                            <button type="button" className = "frmBtn"  onClick = {this.handleSubmit  }> SignOut </button>
                                        )
                                    } */}

                                        {/* { (!this.state.isSignedIn)  ?
                                        (
                                            <div className =  "hmItem"> <Link to='/login'>  SignIn  </Link> </div>
                                        ):
                                        ( 
                                            // <button type="button" className = "frmBtn" > SignOut </button>
                                            <button type="button" className = "frmBtn"  onClick={() => firebase.auth().signOut()}>Sign out!</button>
                                        )
                                    } */}

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}


export default withRouter(Header)