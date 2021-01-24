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
//    console.log(firebase.database().ref('/users/' + userId))
//    let user;
//    firestore.collection("users").doc(userId).get().then((profile) => {
//        console.log(profile)
//    });
//    console.log(user)
//   console.log(firestore.collection("users").doc(userId).get())
    // render() {
    //     const user = props.user;
    //     console.log(user);
    //     auth.currentUser.updateProfile({
    //         highScore : 100
    //     }).then( () => {
    //         console.log(user)
    //     }

    //     ).catch((error) =>
    //     {   console.log(error)

    //     })
    // //     // updateHighScore();
        // let currentUser = firestore.collection('users').get();
        // console.log(currentUser)
        // console.log(auth.currentUser.uid)

       
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



export default Home;