import React,{Component} from 'react';
import Header from "./Header"
import SearchForTakeARide from "./SearchForTakeARide"
import Search from './Search';
import Footer from './Footer'
import axios from "axios"
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
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
 
    async handleSubmit(){
        const { userName,mobileNum,source,destination } = this.state
        const data = this.state
        console.log(userName+ "" + mobileNum + "" +source + "" +destination);
        await axios.post("http://localhost:8000/takeride",data)
        .then(() =>console.log("axios"))
        .catch((err) => console.log(err))
    }

    render(){
        return(
            <div className = "main">
                <Header />
                <SearchForTakeARide state={this.state} handleChange={this.handleChange}/>
                <Search submitHandler={this.handleSubmit}/>
                <Footer />
            </div>
        )
    }
}

export default TakeARide;