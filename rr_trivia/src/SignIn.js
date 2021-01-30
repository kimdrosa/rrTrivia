import React, {useState} from "react";
import { Link } from "react-router-dom";
import {auth} from './firebase_config.js';
import Paper from './styles/Paper.js';
import H1 from './styles/H1.js';
import Input from './styles/Input.js';
import Button from './styles/Button.js';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
          setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
        
      };

    const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

   

  return (
    <Paper>
    <H1 style={{fontStyle:"italic", fontSize:"60px"}}>Rebel Rock Trivia</H1>
    <div >

      <div>
        {error !== null && <div >{error}</div>}
        <form style={{display: "flex", flexDirection: "column"}}className="">
          <div>
          <label style={{color:"white", marginRight:'20px', fontSize:"20px", fontWeight:"600"}}htmlFor="userEmail" >
            Email:
          </label>
          <Input
           type="email"
           className="my-1 p-1 w-full"
           name="userEmail"
           value = {email}
           placeholder="email@email.com"
           id="userEmail"
           onChange = {(event) => onChangeHandler(event)}/>
          </div>
          <div>
          <label style={{color:"white", fontSize:"20px", fontWeight:"600"}} htmlFor="userPassword">
            Password:
          </label>
          <Input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value = {password}
            placeholder="password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          </div>
         
          <Button style={{alignSelf:'center', width:'150px'}} onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </Button>
         
        </form>
  
       
        <p style={{color:"white"}}>
          Don't have an account?{" "}
          <Link to="signUp" 
                style={{color:"#dfacfc"}}>
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "passwordReset" 
             style={{color:"#dfacfc"}}>
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
    </Paper>
  );
  
};
export default SignIn;