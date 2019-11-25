import React,{Component} from 'react';
import "../styles/takeARide.css"


class TakeARide extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = "login-page">
                <div className = "login" > 
                    <h1 className = "app-name"> Hop On </h1>
                    <input type="text" className = "pick-up" placeholder = "Pick up Location" />
                    <input type="text" className = "drop" placeholder = "Drop Location" />
                </div>
                <div>
                    <input type = "button" className = " search-for-partner" value = "Search for Ride"/>
                </div>
            </div>
        )
    }
}

export default TakeARide;