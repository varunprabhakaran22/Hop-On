import React,{Component} from 'react';
import "../styles/takeARide.css";
import { withRouter } from 'react-router-dom'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


class Menu extends Component{
    constructor(){
        super()
    }
    render(){
        console.log(this.props.userDetails)
        return(
            <div>
                <h1> Menu Printing</h1>
                <h3>
                <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                </h3>
            </div>
        )
    }
}


export default Menu