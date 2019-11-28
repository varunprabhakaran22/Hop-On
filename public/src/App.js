import React,{Component} from 'react';
import './App.css';
import LandingPage from "./components/LandingPage"
import TakeARide from "./components/TakeARide"
import { Route,Switch,Redirect } from 'react-router-dom'
import ShareARide from './components/ShareARide';
import Login from './components/Login';



class App extends Component {
  constructor(){
    super()
  }

  render(){
    return (
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/homepage" component={LandingPage}/>
          <Route exact path="/takearide" component={TakeARide}/>
          <Route exact path="/sharearide" component = {ShareARide} />
        </Switch>
    )
  }
}

export default App;
