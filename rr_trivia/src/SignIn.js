import React, {useState} from "react";
import { Link } from "react-router-dom";
import {auth} from './firebase_config.js';
import Paper from './styles/Paper.js';
import H1 from './styles/H1.js';
import Input from './styles/Input.js';

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
    <div  className="mt-8">
      <h1 style={{color:"white"}} className="text-3xl mb-2 text-center font-bold">Sign In</h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
        <form style={{display: "flex", flexDirection: "column"}}className="">
          <div>
          <label style={{color:"white", marginRight:'20px', fontSize:"20px", fontWeight:"600"}}htmlFor="userEmail" className="block">
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
          <label style={{color:"white", fontSize:"20px", fontWeight:"600"}} htmlFor="userPassword" className="block">
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
         
          <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
         
        </form>
  
       
        <p style={{color:"white"}} className="text-center my-3">
          Don't have an account?{" "}
          <Link to="signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "passwordReset" className="text-blue-300 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
    </Paper>
  );
  
};
export default SignIn;