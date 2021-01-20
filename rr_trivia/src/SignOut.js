import React, {useState} from "react";
import { Link } from "react-router-dom";
import {auth} from './firebase_config.js';


const SignOut = () => {

const handleSignOut = (event) => 
{   event.preventDefault();
    auth.signOut().catch((error) => {
    console.error(error);
  });
}

  console.log('SIGNING OUT')

  return (
      <button onClick={(event)=>{handleSignOut(event)}}>Sign Out</button>
  )

}

export default SignOut;

