import React,{Component} from 'react';
import Header from "../components/Header"
import SearchArea from "../components/SearchArea"
import "../styles/takeARide.css"


class TakeARide extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = "main">
                <Header />
                <SearchArea />
                <div>
                    <input type = "button" className = " search-for-partner" value = "Search for Ride"/>
                </div>
            </div>
        )
    }
}

export default TakeARide;