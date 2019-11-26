import React,{Component} from 'react';
import "../styles/takeARide.css"


class Header extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className = "header" > 
            <div className = "menu-header">
                <div className = "menu"> </div>  
                <div className = "menu"></div>
                <div className = "menu" ></div>
            </div>
            <div className = "title">
                Hop On 
            </div>
        </div>
        )
    }
}

export default Header