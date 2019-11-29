import React,{Component} from 'react';
import "../styles/header.css"
import { withRouter , Link } from 'react-router-dom'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Header from "./Header"

class SearchComponent extends Component{
    constructor(){
        super()
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
                            <input type="text" className="frmField" placeholder="Leaving from" />
                            <input type="text" className="frmField" placeholder="Going to" />
                            <input type="datetime-local" name="date" />
                            <div className="textCenter">
                                <Link to='/find/a/ride' className="frmBtn" >Find a ride </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchComponent




