import React,{Component} from 'react';
import "../styles/login.css"

class Login extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className = "login-page">
                <div className = "login" > 
                    <h1 className = "app-name"> Hop On </h1>
                    <button type="button" className = "take-ride" >Take a <br />Ride</button>
                    <button type="button" className = "share-ride" >Share a <br />Ride</button>
                </div>
            </div>
        )
    }
}


export default Login