
import './App.css';
import React, {useState} from 'react';
import data from './testData.js';
import QuizPage from './QuizPage.js';
import H1 from './styles/H1.js';
import Button from './styles/Button.js'




function App() {

  const [enter, setEnter] = useState(false);
  const [play, setPlay] =  useState(false);
  if(enter) {
    return (
     
      <div className="App">
 
   
        <header className="App-header">
          <H1>Ready to Play?</H1>
          
          <Button onClick={() => {setPlay(true); setEnter(false)}}>Play</Button>

         
        </header>
      
      </div>
     
    );
   
  } else if(play){
    return (
      <QuizPage data={data} > </QuizPage>)
  }else {
    return (
      <div className="App">
   
      <header className="App-header">
        <H1>Rebel Rock Trivia</H1>
        <h3 > The trivia game where politics and music collide</h3> 
        
        <Button onClick={() => {setEnter(true)}}>Enter</Button>
      </header>

    </div>
    )
  
  }
}

export default App;
