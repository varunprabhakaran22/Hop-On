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
                <input type = "text"  
                    className="user-name" 
                    name="userName"   
                    value={this.props.state.userName} 
                    placeholder = "Name" 
                    onChange = {event => this.props.handleChange(event)} 
                />
                <input type ="text"  
                    className = "mobile-no" 
                    name = "mobileNum"  
                    value={this.props.state.mobileNum} 
                    placeholder = "Mobile number" 
                    onChange = {event => this.props.handleChange(event)} 
                />
            </div>
{/* <h1> {this.state.userName } {this.state.mobileNum}</h1> */}
            <div className = "search-area">
                <input type="text" 
                    className = "pick-up" 
                    name = "source"  
                    value={this.props.state.source} 
                    placeholder = "Pick up Location" 
                    onChange = {event => this.props.handleChange(event)} 
                />
                <input type="text" 
                    className = "drop" 
                    name = "destination"  
                    value={this.props.state.destination} 
                    placeholder = "Drop Location" 
                    onChange = {event => this.props.handleChange(event)}
                />
            </div>
            {/* <h1> {this.state.source } {this.state.destination}</h1> */}
        </div>
        )
    }
}

export default SearchArea