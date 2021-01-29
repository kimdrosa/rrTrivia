import React from 'react';
import { Link } from 'react-router-dom';
import H1 from './styles/H1.js';
import Paper from './styles/Paper.js';
import Button from './styles/Button.js';
import Button2 from './styles/Button2.js';

import firebase from 'firebase';
import {auth, firestore} from './firebase_config.js';
import "firebase/database";
import starAndFist from './assests/starFist.jpg'



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

                <Paper style={{backgroundColor:"white", display:"flex", flexDirection:"column", alignContent:"center"}}>
                    <H1 style={{color:"black"}}>Rebel Rock Trivia</H1>
                    <img style={{width:'500px', alignSelf:'center'}} src={starAndFist} />
                    <Link to='/selectSingleOrMixed'>

                        <Button onClick={() => {console.log('enter')}}>Enter</Button>
                    </Link>
                    <Link to='/userStats'>
                        <a style={{padding:"20px"}} onClick={() => {console.log('enter')}}>My Stats</a>
                    </Link>
                </Paper>
             
            </div>
        )
    }



export default Home;