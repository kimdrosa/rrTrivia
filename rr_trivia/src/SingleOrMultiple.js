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


function SingleOrMultiple() {

    const [category, setCategory] = useState(null);
    if(category === null) {
    return ( 
   
        <div className="SingleOrMultiple">

            <Paper>
        
            <div style={{display:"grid", gridGap:"20px", gridTemplateColumns:"1fr 1fr"}}>
            
            <Link to={'\categories'}> 
                    <Button2 > Single Category</Button2>
            </Link>
            
                <Button2 onClick={() => {setCategory(rrMix)}}> Mix of Categories </Button2>
        
            </div>
            
            </Paper>
        </div>
    )
    } else {
        return <QuizPage data={category} advanced={advanced}/>
    }


}



export default SingleOrMultiple;