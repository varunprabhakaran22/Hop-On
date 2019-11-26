import React,{Component} from 'react';
import Header from "./Header"
import SearchArea from "./SearchArea"
import Footer from './Footer';
import "../styles/takeARide.css"



class TakeARide extends Component{
    constructor(){
        super()
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