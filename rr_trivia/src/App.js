
import './App.css';
import React, {useReducer, useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import Login from './Login.js';
import QuizPage from './QuizPage.js';
import Home from './Home.js';
import Categories from './Categories.js';
import PasswordReset from './PasswordReset.js';
import ProfilePage from './ProfilePage.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import UserProvider from './providers/UserProvider.js';




function App() {
  const user = null;

  return (
    user ?
    <UserProvider>
    <Router>
      <Route exact path="/" component={Home}/> 
      <Route exact path="/login" component={Login}/> 
      <Route exact path="/quizPage" component={QuizPage}/>
      <Route
              exact
              path="/quizPage/:category"
              name="quizPage"
              render={(props) => {
                console.log(props);
                const category = props.match.params.category;
                console.log(category)
                return (
                  <div>
                    <QuizPage data/>
                  </div>
                );
              }}
            />
      <Route exact path="/categories" component={Categories}/>  
    </Router>
    </UserProvider>
    
    : 

    <UserProvider>
    <Router> 
        <Route exact path="/" component={SignIn}/> 
        <Route exact path="/signup" component={SignUp}/> 
        {/* <Route exact path="/passwordReset" component={PasswordReset}/>  */}
    </Router>
    </UserProvider>
    
     
          // <PasswordReset path = "passwordReset" />
 
  );

 
 
  // const [enter, setEnter] = useState(false);
  // const [play, setPlay] =  useState(false);
  // const [category, setCategory] = useState(questions);
  // const [user, setUser] = useState(null);
 
  // fireConfig.auth().onAuthStateChanged((user) => {
  //   user ? setUser(user) : setUser(null);
  // })

  // if(enter) {
  //   return (
     
  //     <div className="App">

   
  //         <Paper>
  //           <H1>Choose a Category </H1>
  //           <div style={{display:"grid", gridGap:"20px", gridTemplateColumns:"1fr 1fr"}}>
  //           <Button2 onClick={() => {setPlay(true); setEnter(false); setCategory(rebelRappers)}}> Rebel Rappers </Button2>
  //           <Button2 onClick={() => {setPlay(true); setEnter(false); setCategory(rrMix)}}> Rebel Rock Mix </Button2>
  //           <Button2 onClick={() => {setPlay(true); setEnter(false); setCategory(hallOfFame)}}> Hall of Fame </Button2>
  //           <Button2 onClick={() => {setPlay(true); setEnter(false); setCategory(shutUpAndSing)}}> Shut Up And Sing </Button2>
  //           </div>
  //         </Paper>
         
       
      
  //     </div>
     
  //   );
   
  // } else if(play){
  //   return (
  //     <QuizPage data={category} advanced={advanced}> </QuizPage>)
  // }else {
  //   return (
  //     <div className="App">
        
  //       <Paper>
  //       <H1>Rebel Rock Trivia</H1>
  //       <h3 style={{color:'white'}}> The trivia game where politics and music collide</h3> 
  //       <Button onClick={() => {setEnter(true)}}>Enter</Button>
  //       </Paper>

        
  //   </div>
  //   )
  
  // }
}

export default App;
