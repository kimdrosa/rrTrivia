
import './App.css';
import React, {useState} from 'react';
// import results from './data.js';
import QuizPage from './QuizPage.js';
import H1 from './styles/H1.js';
import Paper from './styles/Paper.js';
import Button from './styles/Button.js';
import Button2 from './styles/Button2.js';
import axios from 'axios';
import questions from './questions/questions.json';
import rebelRappers from './questions/rebelRappers.json';
import rrMix from './questions/rrMix.json';
import advanced from './questions/advanced.json';
import shutUpAndSing from './questions/shutUpAndSing.json';
import hallOfFame from './questions/hallOfFame.json'


// function getQuestions() {
//   let results;
//   axios.get('/api/getQuestions')
//   .then((response) => {
//     results = response;
//   })
//   .catch((error)=> {
//     console.log(error);
//   })
//   return results;
// }

function App() {
    // let results = getQuestions();
    
 
  const [enter, setEnter] = useState(false);
  const [play, setPlay] =  useState(false);
  const [category, setCategory] = useState(questions);
  if(enter) {
    return (
     
      <div className="App">
 
   
          <Paper>
            <H1>Choose a Category </H1>
            <div style={{display:"grid", gridGap:"20px", gridTemplateColumns:"1fr 1fr"}}>
            <Button2 onClick={() => {setPlay(true); setEnter(false); setCategory(rebelRappers)}}> Rebel Rappers </Button2>
            <Button2 onClick={() => {setPlay(true); setEnter(false); setCategory(rrMix)}}> Rebel Rock Mix </Button2>
            <Button2 onClick={() => {setPlay(true); setEnter(false); setCategory(hallOfFame)}}> Hall of Fame </Button2>
            <Button2 onClick={() => {setPlay(true); setEnter(false); setCategory(shutUpAndSing)}}> Shut Up And Sing </Button2>
            </div>
          </Paper>
         
       
      
      </div>
     
    );
   
  } else if(play){
    return (
      <QuizPage data={category} advanced={advanced}> </QuizPage>)
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
