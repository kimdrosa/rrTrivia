import React, { useState } from "react";
import { Link } from "react-router-dom";
import {auth, generateUserDocument} from './firebase_config.js';
import Paper from './styles/Paper.js';
import H1 from './styles/H1.js';
import Input from './styles/Input.js';
import Button from './styles/Button.js';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [highScore, setHighScore] = useState(0);
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName, highScore});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <Paper style={{color:"white"}}>
    <div >
      <H1 style={{color:"white"}}>Sign Up</H1>
      <div>
        {error !== null && (
          <div>
            {error}
          </div>
        )}
        <form style={{marginTop:"60px", fontWeight:"500", display:'flex', flexDirection:'column'}}>
       
          <label htmlFor="displayName">
            User Name
          </label>
          <Input
            type="text"
            name="displayName"
            placeholder="yourUsername"
            value={displayName}
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />
       
          <label htmlFor="userEmail">
            Email
          </label>
          <Input
            type="email"
            name="userEmail"
            value={email}
            placeholder="youremail@email.com "
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userPassword">
            Password
          </label>
          <Input
            type="password"
            name="userPassword"
            value={password}
            placeholder="your password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          <Button
            style={{alignSelf:"center", width:"150px"}}
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </Button>
        </form>
       
        <p>
          Already have an account?{" "}
          <Link to="/" style={{color:"#dfacfc"}}>
            Sign in here
          </Link>
        </p>
      </div>
    </div>
    </Paper>
  );
};
export default SignUp;