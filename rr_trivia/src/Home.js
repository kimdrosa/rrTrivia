import React from 'react';
import { Link } from 'react-router-dom';
import H1 from './styles/H1.js';
import Paper from './styles/Paper.js';
import Button from './styles/Button.js';
import Button2 from './styles/Button2.js';

import SignUp from './SignUp.js';

class Home extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="Home">
                <Paper>
                   
                    <H1>Rebel Rock Trivia</H1>
                    <h3 style={{color:'white'}}> The trivia game where politics and music collide</h3> 
                    <Link to='/categories'>
                        <Button onClick={() => {console.log('enter')}}>Enter</Button>
                    </Link>
                </Paper>
            </div>
        )
    }

}

export default Home;