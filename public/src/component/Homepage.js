import React,{Component} from 'react';
import "../styles/main.css"
import { withRouter } from 'react-router-dom'
import Header from './Header';


class Homepage extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Header />
            </div>
        )
    }
}

export default Homepage















