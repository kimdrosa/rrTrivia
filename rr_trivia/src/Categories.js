import React, { useState } from 'react';
import H1 from './styles/H1.js';
import Paper from './styles/Paper.js';
import { Link } from 'react-router-dom'
import Button from './styles/Button.js';
import Button2 from './styles/Button2.js';
import fireConfig from './firebase_config.js';
import questions from './questions/questions.json';
import rebelRappers from './questions/rebelRappers.json';
import rrMix from './questions/rrMix.json';
import advanced from './questions/advanced.json';
import shutUpAndSing from './questions/shutUpAndSing.json';
import hallOfFame from './questions/hallOfFame.json'
import QuizPage from './QuizPage.js';


function Categories() {
    const [category, setCategory] = useState(null);

    if(category === null) {
    return(
           
   
        <div className="Categories">

   
        <Paper>
          <H1>Choose a Category </H1>
          <div style={{display:"grid", gridGap:"20px", gridTemplateColumns:"1fr 1fr"}}>
        
            <Button2 onClick={() => {setCategory(rebelRappers)}}> Rebel Rappers </Button2>
      

        
            <Button2 onClick={() => {setCategory(rrMix)}}> Rebel Rock Mix </Button2>
       

          
            <Button2 onClick={() => {setCategory(hallOfFame)}}> Hall of Fame </Button2>
         

           
            <Button2 onClick={() => {setCategory(shutUpAndSing)}}> Shut Up And Sing </Button2>
          
          </div>
        </Paper>
    </div>
    )
    } else {
        return <QuizPage data={category} advanced={advanced}/>
    }


}



export default Categories;