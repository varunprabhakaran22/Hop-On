import React,{Component} from 'react';
import "../styles/takeARide.css"


class SearchArea extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className = "search-area">
                <input type="text" className = "pick-up" placeholder = "Pick up Location" />
                <input type="text" className = "drop" placeholder = "Drop Location" />
            </div>
        )
    }
}

export default SearchArea