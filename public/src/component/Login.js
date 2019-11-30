// import React,{Component} from 'react';
// import FacebookLogin from 'react-facebook-login';
// import { GoogleLogin } from 'react-google-login';
// import { withRouter , Link } from 'react-router-dom'
// import cors from "cors";
// import firebase from "firebase"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// // import LandingPage from './LandingPage';
// // import Menu from "./Menu";
// // import PostToServer from "./PostToServer";

// firebase.initializeApp({
//   apiKey: "AIzaSyDxf4pvmS6Zpjv3Wof0SdVJajuVa95pA1k",
//   authDomain: "hop-on-6b5d5.firebaseapp.com"
// })


// class Login extends Component {
//   state = { 
//     isSignedIn: false,
//     userDetails :{},
//     userEmail: "",
//   }
//   uiConfig = {
//     signInFlow: "popup",
//     signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//       // firebase.auth.GithubAuthProvider.PROVIDER_ID,
//       // firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     callbacks: {
//       signInSuccessWithAuthResult: () => false
//     }
//   }
  
//   componentDidMount = () => {
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ isSignedIn: !!user,userDetails:user})
//     }) 
//   }
  
//   render() {
//     console.log("state" + this.state.isSignedIn);
    
//     const { isSignedIn,userDetails } =this.state
//     return (
//       <div className="App">
//         { isSignedIn ? (
//           <div>
//             {/* {this.props.history.push("/")}
            
//             */}
//             <h1>hey</h1>
//           </div>
//           ) : 
//           (
//             <StyledFirebaseAuth
//               uiConfig={this.uiConfig}
//               firebaseAuth={firebase.auth()}
//             />
//           )
//         }
//       </div>
//     )
//   }
// }


// export default Login



import React, { Component } from "react"
import { withRouter , Link } from 'react-router-dom'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk",
  authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com"
})

class Login extends Component {
  state = { isSignedIn: false }
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
      console.log("user", user)
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