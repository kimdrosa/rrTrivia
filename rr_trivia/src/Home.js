import React from 'react';
import { Link } from 'react-router-dom';
import H1 from './styles/H1.js';
import Paper from './styles/Paper.js';
import Button from './styles/Button.js';
import Button2 from './styles/Button2.js';
import firebase from 'firebase';
import {auth, firestore} from './firebase_config.js';
import "firebase/database";


import SignUp from './SignUp.js';
const database = firebase.database();

const Home = (props) => {
   
    const[highScore, setScore] = React.useState(100)
    let userId = auth.currentUser.uid;
  const changeHighScore = () => {
    const db = firebase.firestore()
    db.collection('users').doc(userId).set({...props.user, highScore})
  }

  changeHighScore();



       
        return (
            <div className="Home">
                <Paper>
                   
                    <H1>Rebel Rock Trivia</H1>
                    <h3 style={{color:'white'}}> The trivia game where politics and music collide</h3> 
                    <Link to='/categories'>
                        <Button onClick={() => {console.log('enter')}}>Enter</Button>
                    </Link>
                </Paper>
                <Link to='/userStats'>
                        <Button onClick={() => {console.log('enter')}}>User Stats</Button>
                    </Link>
            </div>
        )
    }



export default Home;