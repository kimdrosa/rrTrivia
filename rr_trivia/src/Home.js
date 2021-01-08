import React from 'react';
import { Link } from 'react-router-dom';
import H1 from './styles/H1.js';
import Paper from './styles/Paper.js';
import Button from './styles/Button.js';
import Button2 from './styles/Button2.js';
import starAndFist from './assests/starFist.jpg'

class Home extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="Home">
                <Paper style={{backgroundColor:"white"}}>
                    <H1 style={{color:"black"}}>Rebel Rock Trivia</H1>
                    <img style={{width:'100%'}} src={starAndFist} />
                    <Link to='/selectSingleOrMixed'>
                        <Button onClick={() => {console.log('enter')}}>Enter</Button>
                    </Link>
                </Paper>
            </div>
        )
    }

}

export default Home;