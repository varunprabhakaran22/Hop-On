import React,{Component} from 'react';
import "../styles/takeARide.css";
import { withRouter } from 'react-router-dom'
class Menu extends Component{
    constructor(){
        super()
    }
    render(){
        console.log(this.props.userDetails)
        return(
            <div>
                <h1> Menu Printing</h1>
                <h3>
                  d
                </h3>
            </div>
        )
    }
}


export default Menu