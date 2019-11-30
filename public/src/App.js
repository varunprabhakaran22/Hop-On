import React,{Component} from 'react';
import './App.css';
import LandingPage from "./components/LandingPage"
import TakeARide from "./components/TakeARide"
import { Route,Switch,Redirect } from 'react-router-dom'
import ShareARide from './components/ShareARide';
import Login from './component/Login'
import Homepage from "./component/Homepage"
import FindRide from "./component/FindRide"
import ShareRide from "./component/ShareRide"
import RideResult from "./component/RideResult"

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
          <Route exact path="/login" component={Login }/>  
          <Route exact path="/find/a/ride" component={FindRide }/>
          <Route exact path="/search/a/ride" component={ShareRide}/>
          <Route exact path="/ride/result" component={RideResult}/>
          {/* <Route exact path="/result" component={ShareRide}/> */}
        </Switch>
        {/* <SearchComponent /> */}
      </div>
    )
  }
}

export default App;