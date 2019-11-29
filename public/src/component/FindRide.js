import React,{Component} from 'react';
import "../styles/header.css"
import { withRouter , Link, Redirect } from 'react-router-dom'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Header from "./Header"
import axios from "axios"

class FindRide extends Component{
    constructor(){
        super()
        this.state ={
            source:"",
            destination:"",
            datetime:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit()  {    
        console.log("executing");
        const {source, destination ,datetime} = this.state
        const data = this.state
        console.log(source + "" +destination +  "" + datetime);
        axios.post("http://localhost:8000/takeride",data)
        .then(() =>console.log("axios"))
        .catch((err) => console.log(err))
        this.props.history.push("/ride/result")

    }

    render(){
        return(
            <div>
                <Header />
                <div className="container700 autocenter p9000">
                    <div className="textCenter">
                        <h1>Find a ride</h1>
                    </div>
                    <div className="">
                        <form className="form">
                            <input type="text" 
                                className="frmField" 
                                placeholder="Leaving from"
                                name = "source"  
                                value={this.state.source} 
                                onChange = {event => this.handleChange(event)}
                            />

                            <input type="text" 
                                className="frmField" 
                                placeholder="Going to" 
                                name = "destination"  
                                value={this.state.destination}  
                                onChange = {event => this.handleChange(event)}
                            />

                            <input type="datetime-local" 
                                name="date"                                 
                                value={this.state.datetime} 
                                onChange = {event => this.handleChange(event)}
                            />

                            <div className="textCenter">
                                {(((this.state.source) &&(this.state.destination) != "" )) ?(
                                    <button type="button" className = "frmBtn"  onClick = {this.handleSubmit}> find a ride</button>
                                ):
                                (
                                    <button type="button" className = "frmBtn" 
                                        disabled={((!this.state.source) && (!this.state.destination))}> find a ride
                                    </button>
                                )}

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(FindRide)




