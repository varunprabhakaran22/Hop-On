import React,{Component} from 'react';
import './App.css';
import LandingPage from "./components/LandingPage"
import TakeARide from "./components/TakeARide"
import { Route,Switch,Redirect } from 'react-router-dom'



class App extends Component {
  constructor(){
    super()
  }

  render(){
    return (
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/takearide" component={TakeARide}/>
        </Switch>
    )
  }
}

export default App;
