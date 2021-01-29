
import './App.css';
import React, {useContext} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import Login from './Login.js';
import QuizPage from './QuizPage.js';
import UserStats from './UserStats.js';
import Home from './Home.js';
import Categories from './Categories.js';
import PasswordReset from './PasswordReset.js';
import SingleOrMultiple from './SingleOrMultiple.js';
import { UserContext } from './providers/UserProvider.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';





function Application() {
  const user = useContext(UserContext);
  console.log(user);

  return (
    user != undefined ?
    
  
    <Router>
      <Route exact path="/" render={()=>(
        <Home user={user}/>

      )}/> 
      <Route exact path="/login" component={Login}/> 
      <Route exact path="/quizPage" component={QuizPage}/>
      <Route exact path="/selectSingleOrMixed" component={SingleOrMultiple}/>
      <Route exact path="/userStats" component={UserStats}/>
      <Route exact path="/categories" component={Categories}/>  
    </Router>

    
    : 

    <Router> 
        <Route exact path="/" component={SignIn}/> 
        <Route exact path="/signup" component={SignUp}/> 
        <Route exact path="/passwordReset" component={PasswordReset}/> 
    </Router>
  
    
     
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

export default Application;
