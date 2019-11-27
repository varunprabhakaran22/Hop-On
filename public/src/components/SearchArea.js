import React,{Component} from 'react';
import "../styles/takeARide.css"


class SearchArea extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <div className = "profile">
                    <input type = "text"  className="user-name" placeholder = "Name" ></input>
                    <input type ="text"  className = "mobile-no" placeholder = "Mobile number" ></input>
                </div>
                <div className = "search-area">
                    <input type="text" className = "pick-up" placeholder = "Pick up Location" />
                    <input type="text" className = "drop" placeholder = "Drop Location" />
                </div>
            </div>
        )
    }
}

export default SearchArea