import React,{Component} from 'react';
import Header from "./Header"
import SearchArea from "./SearchArea"
import Footer from './Footer';
import "../styles/takeARide.css"



class TakeARide extends Component{
    constructor(){
        super()
        this.state ={
            userName: "",
            mobileNum:"",
            source:"",
            destination:""
        }
    }

    render(){
        return(
            <div>
                <Header />
                <SearchArea />
                <Footer />
            </div>
        )
    }
}

export default TakeARide;