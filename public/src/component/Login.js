import React, { Component } from "react"
import { withRouter , Link } from 'react-router-dom'
import axios from "axios";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk",
  authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com"
})

class Login extends Component {
  state = { 
    isSignedIn: false,
    userdata:{}
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user data", user)

      if(user){
        const userdata = {}
        userdata .email = user.email 
        userdata .name  = user.displayName
        axios.post("http://localhost:8000/user/auth",userdata)
        .then(() =>console.log("axios"))
        .catch((err) => console.log(err))
        return(null) 
      }
    })  
  }


  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            {/* <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1> */}
            {this.props.history.push("/")}        
             
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default withRouter(Login)

// firebaseui::rememberedAccounts