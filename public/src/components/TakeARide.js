import React,{Component} from 'react';
import "../styles/takeARide.css"


class TakeARide extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = "main">
                <div className = "header" > 
                    <div>
                        <div className = "menu"> </div>  
                        <div className = "menu"></div>
                        <div className = "menu" ></div>
                    </div>
                    <h1 className = "app-name"> Hop On </h1>
                </div>

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