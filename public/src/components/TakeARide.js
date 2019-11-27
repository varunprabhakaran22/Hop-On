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
        this.handelEvent =this.handelEvent.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handelEvent(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    async handleSubmit(){
        const { userName,mobileNum,source,destination } = this.state
        await axios.post("",{})
        .then(() =>)
    }

    render(){
        return(
            <div>
                <Header />
                <SearchArea state={this.state} handleChange={this.handelEvent}/>
                {/* <div> */}
                    {/* <div className = "profile">
                        <input type = "text"  
                            className="user-name" 
                            name="userName"   
                            value={this.state.userName} 
                            placeholder = "Name" 
                            onChange = {this.handelEvent} 
                        />
                        <input type ="text"  
                            className = "mobile-no" 
                            name = "mobileNum"  
                            value={this.state.mobileNum} 
                            placeholder = "Mobile number" 
                            onChange = {this.handelEvent} 
                        />
                    </div>
    <h1> {this.state.userName } {this.state.mobileNum}</h1>
                    <div className = "search-area">
                        <input type="text" 
                            className = "pick-up" 
                            name = "source"  
                            value={this.state.source} 
                            placeholder = "Pick up Location" 
                            onChange = {this.handelEvent} 
                        />
                        <input type="text" 
                            className = "drop" 
                            name = "destination"  
                            value={this.state.destination} 
                            placeholder = "Drop Location" 
                            onChange = {this.handelEvent}
                        />
                    </div>
                    <h1> {this.state.source } {this.state.destination}</h1>
                </div> */}
                <Footer submitHandler={this.handleSubmit}/>
            </div>
        )
    }
}

export default TakeARide;