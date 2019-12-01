import React,{Component} from 'react';
import "../styles/takeARide.css";
import { withRouter } from 'react-router-dom'
import firebase from "firebase"



class Menu extends Component{
    constructor(){
        super()
    }
    render(){
        console.log(this.props.userDetails)
        return(
            <div>
                <h1> Menu</h1>
                {this.props.userDetails.displayName}
                <h3>
                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                </h3>
            </div>
        )
    }
}


export default Menu