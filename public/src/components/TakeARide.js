import React,{Component} from 'react';
import Header from "../components/Header"
import "../styles/takeARide.css"


class TakeARide extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = "main">
                <Header />
                    <input type="text" className = "pick-up" placeholder = "Pick up Location" />
                    <input type="text" className = "drop" placeholder = "Drop Location" />
                
                <div>
                    <input type = "button" className = " search-for-partner" value = "Search for Ride"/>
                </div>
            </div>
        )
    }
}

export default TakeARide;