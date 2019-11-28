import React,{Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import cors from "cors";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import LandingPage from './LandingPage';
import Menu from "./Menu";

firebase.initializeApp({
  apiKey: "AIzaSyDxf4pvmS6Zpjv3Wof0SdVJajuVa95pA1k",
  authDomain: "hop-on-6b5d5.firebaseapp.com"
})


class Login extends Component {
  state = { 
    isSignedIn: false,
    userDetails :{},
    userEmail: "",
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user,userDetails:user})
    }) 
  }

  render() {
    const { isSignedIn,userDetails } =this.state
     
    return (
      <div className="App">
        { isSignedIn?(
          <div>
            < Menu  userDetails = { userDetails } />
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
          </div>
          ) : 
          (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )
        }
      </div>
    )
  }
}


export default Login