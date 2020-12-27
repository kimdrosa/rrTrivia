import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import fireConfig from './firebase_config.js';
import App from './App.js';

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div></div>
        //     <FirebaseAuthProvider firebase={firebase} {...config}>
        //         {
        //             <App/>
        //         }
        //     </FirebaseAuthProvider>

        //     <FirebaseAuthConsumer>
        //     {({ isSignedIn, user, providerId }) => {
        //       return (
        //         <pre style={{ height: 300, overflow: "auto" }}>
        //           {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
        //         </pre>
        //       );
        //     }}
        //   </FirebaseAuthConsumer>
        //   <IfFirebaseAuthedAnd
        //   filter={({ providerId, user }) => {
        //     if(!user.email){return false;}
        //     return (
        //       providerId !== "anonymous" &&
        //       user.email.indexOf("@companyname.com") > -1
        //     );
        //   }}
        //   >
        //  {({ isSignedIn, user, providerId }) => {
        //    return (
        //    //some jsx code
        //    );
        //  }}
        // </IfFirebaseAuthedAnd>
        )
    }

}

export default Login;