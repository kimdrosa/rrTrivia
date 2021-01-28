import React, { useState } from 'react';
import H1 from './styles/H1.js';
import Paper from './styles/Paper.js';
import { Link } from 'react-router-dom'
import Button2 from './styles/Button2.js';

import QuizPage from './QuizPage.js';


function SingleOrMixSelect() {
    const [category, setCategory] = useState(null);

    // if(category === null) {
    return(
        <div className="SingleOrMix">
            <Paper>
            <div style={{display:"grid", gridGap:"20px", gridTemplateColumns:"1fr 1fr"}}>
            
                <Button2 > Single Category </Button2>
            
                <Button2 > Category Mix </Button2>
            
            </div>
            </Paper>
        </div>
    )
    // } else {
    //     return <QuizPage data={category} advanced={advanced}/>
    // }


}



export default SingleOrMixSelect;