import React,{Component} from 'react';
import "../styles/takeARide.css"


class Footer extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className =  "search-ride">
                <input type = "button" className = " search-for-partner" value = "Search for Ride"/>
            </div>
        )
    }
}

export default Footer