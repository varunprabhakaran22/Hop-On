import React,{Component} from 'react';
import "../styles/header.css"
import { withRouter } from 'react-router-dom'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


class SearchComponent extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <div className="container700 autocenter p9000">
                    <div className="textCenter">
                        <h1>Find a ride</h1>
                    </div>
                    <div className="">
                        <form className="form">
                            <input type="text" className="frmField" placeholder="Leaving from" />
                            <input type="text" className="frmField" placeholder="Going to" />
                            <input type="datetime-local" name="date" />
                            <div className="textCenter">
                                <input type="submit" className="frmBtn" value="Find a Ride" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchComponent




