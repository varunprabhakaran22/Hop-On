import React,{Component} from 'react';
import "../styles/landingPage.css"
import { withRouter } from 'react-router-dom'
class LandingPage extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className = "landing-page">
                <div className = "landing" > 
                    <h1 className = "app-name"> Hop On </h1>
                    <button type="button" className = "take-ride" onClick={()=>this.props.history.push("/takearide")}>Take a <br />Ride</button>
                    <button type="button" className = "share-ride" onClick = {() => this.props.history.push("/sharearide")} >Share a <br />Ride</button>
                </div>
            </div>
        )
    }
}


export default withRouter(LandingPage)