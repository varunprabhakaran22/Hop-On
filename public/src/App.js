import React,{Component} from 'react';
import './App.css';
import LandingPage from "./components/LandingPage"
import TakeARide from "./components/TakeARide"
import { Route,Switch,Redirect } from 'react-router-dom'
import ShareARide from './components/ShareARide';
import Login from './components/Login';
import Homepage from "./component/Homepage"
import SearchComponent from "./component/SearchComponent"


class App extends Component {
  constructor(){
    super()
    this.state ={
      isSignedIn:""
    }
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage }/>  
          <Route exact path="/find/a/ride" component={TakeARide }/>
          <Route exact path="/search/a/ride" component={ShareARide}/>
        </Switch>
        {/* <SearchComponent /> */}
      </div>
    )
  }
}

export default App;