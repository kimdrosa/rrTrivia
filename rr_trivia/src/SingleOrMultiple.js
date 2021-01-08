import React, { useState } from 'react';
import H1 from './styles/H1.js';
import Paper from './styles/Paper.js';
import { Link } from 'react-router-dom'
import Button2 from './styles/Button2.js';
import mix from './questions/mix.json';
import advanced from './questions/advanced.json';

import QuizPage from './QuizPage.js';


function SingleOrMultiple() {

    const [category, setCategory] = useState(null);
    if(category === null) {
    return ( 
   
        <div className="SingleOrMultiple">

            <Paper>
        
            <div style={{display:"grid", gridGap:"20px", gridTemplateColumns:"1fr"}}>
            
            <Link to={'\categories'}> 
                    <Button2 style={{width:'100%'}}> Single Category</Button2>
            </Link>
            
                <Button2 onClick={() => {setCategory(mix)}}> Mix of Categories </Button2>
        
            </div>
            
            </Paper>
        </div>
    )
    } else {
        return <QuizPage data={category} advanced={advanced}/>
    }


}



export default SingleOrMultiple;