import React,{Component} from 'react';
import Header from "./Header"
import SearchForShareARide from "./SearchForShareARide";
import Search from './Search';
import Footer from './Footer'
import axios from "axios"
import "../styles/takeARide.css"

class ShareARide extends Component{
    constructor(){
        super()
        this.state ={
            userName: "",
            mobileNum:"",
            carName:"",
            carNum:"",
            vacantSpace:"",
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
 
    handleSubmit(){
        const data = this.state
        console.log(this.state.userName+ "" + this.state.mobileNum + "" + "" + this.state.carName + "" + this.state.carNum + "" + this.state.vacantSpace + "" +this.state.source + "" +this.state.destination);
        axios.post("http://localhost:8000/share/aRide",data)
        .then(() =>console.log("axios"))
        .catch((err) => console.log(err))
    }
 
    render(){
        return(
            <div className ="main">
                <Header />
                <SearchForShareARide state={this.state} handleChange={this.handleChange}/>
                <Search submitHandler={this.handleSubmit}/>
                <Footer />
            </div>
        )
    }
}

export default ShareARide;