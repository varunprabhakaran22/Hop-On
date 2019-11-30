import React,{Component} from 'react';
import "../styles/header.css"
import { withRouter , Link } from 'react-router-dom'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Header from "./Header"
import axios from "axios"


class ShareRide extends Component{
    constructor(){
        super()
        this.state ={
            source:"",
            destination:"",
            stopovers:"",
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

    async handleSubmit()  {
        console.log("executing");
        const {source, destination ,stopovers} = this.state
        const data = this.state
        console.log(source + "" +destination +  "" + stopovers);
        await axios.post("http://localhost:8000/takeride",data)
        .then(() =>console.log("axios"))
        .catch((err) => console.log(err))
        this.props.history.push("/")
    }

    render(){
        return(
            <div>
                <Header />
                <div className="container700 autocenter p9000">
                    <div className="textCenter">
                        <h1>Share a ride</h1>
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

                            <br/>
                            <br />
                            <input type="text" 
                                className="frmField" 
                                placeholder="Stopovers (optional) "
                                name = "stopovers"  
                                value={this.state.stopovers} 
                                onChange = {event => this.handleChange(event)} 
                            />

                            <input type="datetime-local" name="date" />
                            <div className="textCenter">
                                {(((this.state.source) &&(this.state.destination) != "" )) ?(
                                        <button type="button" className = "frmBtn"  onClick = {this.handleSubmit}> Share a ride</button>
                                    ):
                                    (
                                        <button type="button" className = "frmBtn" 
                                            disabled={((!this.state.source) && (!this.state.destination))}> Share a ride
                                        </button>
                                    )
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShareRide
