import React,{Component} from 'react';
import "../styles/main.css"
import { withRouter } from 'react-router-dom'
import Header from './Header';
import Landing from "./Landing"


class Homepage extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Header />
                <Landing />
            </div>
        )
    }
}

export default Homepage















