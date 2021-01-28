import React from 'react';
import { Link } from 'react-router-dom';
import H1 from './styles/H1.js';
import Paper from './styles/Paper.js';
import Button from './styles/Button.js';
import firebase from 'firebase';
import "firebase/database";
import {auth} from './firebase_config.js';


const UserStats = () => {
    const[highScore, setScore] = React.useState(0);
    let userId = auth.currentUser.uid;
    React.useEffect(() => {
        const fetchData = async() => {
            const db = firebase.firestore()
            const data = await db.collection("users").doc(userId).get()
            setScore(data.data().highScore)
        }
        fetchData()

    }, [])

    console.log(highScore)
    // const[highScore, setScore] = React.useState(0);
    // let userId = auth.currentUser.uid;
    //   const getHighScore = () => {
    //     const db = firebase.firestore()
    //     console.log(db.collection('users').doc(userId))
    //   }

    //   getHighScore();

        // console.log(auth.)
        return (
            <div className="Home">
                <Paper>
                   
                    <H1>High Score: {highScore} </H1>
                    {/* <h3 style={{color:'white'}}> The trivia game where politics and music collide</h3> 
                    <Link to='/categories'>
                        <Button onClick={() => {console.log('enter')}}>Enter</Button>
                    </Link> */}
                </Paper>
            </div>
        )
    

}

export default UserStats;