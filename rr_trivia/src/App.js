
import './App.css';
import React, {useState} from 'react';
// import results from './data.js';
import QuizPage from './QuizPage.js';
import H1 from './styles/H1.js';
import Paper from './styles/Paper.js';
import Button from './styles/Button.js';
import axios from 'axios';


function getQuestions() {
  let results;
  axios.get('/api/getQuestions')
  .then((response) => {
    results = response;
  })
  .catch((error)=> {
    console.log(error);
  })
  return results;
}

function App() {
    let results = getQuestions();
    
 
  const [enter, setEnter] = useState(false);
  const [play, setPlay] =  useState(false);
  console.log(results);
  if(enter) {
    return (
     
      <div className="App">
 
   
          <Paper>
          <H1>Ready to Play?</H1>
          
          <Button onClick={() => {setPlay(true); setEnter(false)}}>Play</Button>
          </Paper>
         
       
      
      </div>
     
    );
   
  } else if(play){
    return (
      <QuizPage data={results} > </QuizPage>)
  }else {
    return (
      <div className="App">
        
        <Paper>
        <H1>Rebel Rock Trivia</H1>
        <h3 style={{color:'white'}}> The trivia game where politics and music collide</h3> 
        <Button onClick={() => {setEnter(true)}}>Enter</Button>
        </Paper>

        
    </div>
    )
  
  }
}

export default App;
