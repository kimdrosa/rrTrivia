import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import Question from './styles/Question.js';
import Answer from './styles/Answer.js';
import Answers from './styles/Answers.js';
import H1 from './styles/H1.js';
import QuestionPaper from './styles/QuestionPaper.js'
import QuestionAndAnswers from './styles/QuestionAndAnswers.js';
import AdvancedQuestion from './styles/AdvancedQuestion.js';
import Paper from './styles/Paper.js';
import Score from './styles/Score.js';
import Count from './styles/Count.js';
import Button from './styles/Button.js';
import Time from './styles/Time.js';
import Timer from 'react-compound-timer';
import firebase from 'firebase';
import "firebase/database";
import {auth} from './firebase_config.js';





class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        this.isCorrect = this.isCorrect.bind(this);
        this.advanceRound = this.advanceRound.bind(this);
        this.getQuestionsForRound = this.getQuestionsForRound.bind(this);
        this.getHighScore = this.getHighScore.bind(this);
        this.checkHighScore = this.checkHighScore.bind(this);
        this.setToBetweenRounds = this.setToBetweenRounds.bind(this);
     

        this.state = {
            questions: [],
            currentQuestion: 0,
            correct: null,
            score : 0,
            numCorrect: 0,
            numQuestions: 0,
            isTimeUp: false,
            round: 'basic',
            roundString: '',
            time: 140000,
            inBetweenRounds: false
        };
    }

    componentDidMount() {
      //randomize questions and store them
      let questions = this.props.data;
      for(var i = 0; i < questions.length; i++) {
        let randIndex = Math.floor(Math.random() * questions.length);
        let temp = questions[i];
        questions[i] = questions[randIndex];
        questions[randIndex] = temp;


      }
      this.setState({
        questions : questions
      })
      this.getHighScore()
      // console.log(this.state.highScore)

    }


    setToBetweenRounds(){
      this.setState({
        inBetweenRounds : true
      })

    } 
   //pulls user high score from firebase
    getHighScore() {
      const userId = auth.currentUser.uid;
      const db = firebase.firestore();
      const userDoc = db.collection('users').doc(userId);
      userDoc.get().then((doc) => {
        this.setState({
          highScore : doc.data().highScore
        })
      }) 
      .catch((error) => {
        console.log(error)
      })
    }

    checkHighScore() {
      const userId = auth.currentUser.uid;
      const db = firebase.firestore();
      const userDoc = db.collection("users").doc(userId);
      let userData = {}

       userDoc.get().then((doc) => {
         userData = doc.data();
       })
       .catch((error) => {
         console.log(error)
       })

      if( this.state.score > this.state.highScore) {
        userDoc.set({...userData, highScore : this.state.score})
      }


    }

    advanceRound() {
      console.log('advancing round')
 
      if(this.state.round === 'basic') {
    
        this.setState({
          isBetweenRounds: false,
          round: 'radRound',
          questions: [],
          currentQuestion : 0,
          roundString: 'Radical Round',
          isTimeUp: false,
          correct : null
        })
      
      } else if(this.state.round === 'radRound') {
        this.setState({
          round: 'rebelRound',
          questions : [],
          roundString: 'Rebellion Round',
          currentQuestion : 0,
          isTimeUp: false,
          correct : null
        }) 

      } else if(this.state.round === 'rebelRound') {
          this.setState({
            round: 'resRound',
            questions : [],
            roundString: 'Resistance Round',
            currentQuestion : 0,
            isTimeUp: false,
            correct : null
          })
      } else if(this.state.round === 'resRound') {
        this.setState({
          round: 'revRound',
          roundString: 'Revolution Round',
          questions : [],
          currentQuestion : 0,
          isTimeUp: false,
          correct : null
        })
      }
    }

    getQuestionsForRound () {
      let results = [];
      let advanced = this.props.advanced;
        for(var j = 0; j < advanced.length; j++) {
       
          if(advanced[j].round === this.state.round) {
            results.push(advanced[j]);
            
          }
        }
   
        for(var i = 0; i < results.length; i++) {
          let randIndex = Math.floor(Math.random() * results.length);
          let temp = results[i];
          results[i] = results[randIndex];
          results[randIndex] = temp;
        }
       
      
      this.setState({
        questions : results
      })
    
    }

    //checks if clicked answer is the correct answer
    isCorrect (q, ans){ 
      console.log(ans);
      //NORMAL ROUND
      if(this.state.round === 'basic') {
        if(q === ans) {
            this.setState({correct: true});
         
            setTimeout(()=>{
              this.setState({
                correct: null, 
                currentQuestion: this.state.currentQuestion + 1,
                numCorrect: this.state.numCorrect + 1,
                numQuestions: this.state.numQuestions + 1,
                score : this.state.score + 100}
                )},2000)

        } else {
            this.setState({correct: false});
            setTimeout(() => {
              this.setState({
                correct: null,
                currentQuestion: this.state.currentQuestion + 1,
                numQuestions: this.state.numQuestions + 1}
                )},2000)
        }
       //ADVANCED ROUND
      } else {
        if(q === ans) {
          this.setState({correct: true});
      } else {
          this.setState({correct: false});
      }

      }
    }
    
  
    

    //returns: number of questions out of total, the score, the time remaining 
    //and the question with four answers
    render () {


    
      console.log(this.state)

  


    //NORMAL ROUND
    if(this.state.round === 'basic') {
      function getAnswers() {
        let answers = [];
        answers.push(currentQuestion.answerA);
        answers.push(currentQuestion.answerB);
        answers.push(currentQuestion.answerC);
        answers.push(currentQuestion.answerD);
        for(var i = 0; i < answers.length; i++) {
          let randIndex = Math.floor(Math.random() * answers.length);
          let temp = answers[i];
          answers[i] = answers[randIndex];
          answers[randIndex] = temp;
  
  
        }
        currentQuestion.answers = answers;
      }
      let questions = this.state.questions;
      let currentQuestionIndex = this.state.currentQuestion;
      let currentQuestion = questions[currentQuestionIndex];
      
    if((currentQuestionIndex === questions.length || this.state.isTimeUp) && this.state.score <= 500){
      this.checkHighScore();
      return(
        <Paper>
          <H1>Beginner</H1>
          <h2 style={{color:'white'}}> Your final score was {this.state.score}</h2>
          <Link to={'/'}>
          <Button>Play Again?</Button>
          </Link>
        </Paper>
      )
    } else if((currentQuestionIndex === questions.length || this.state.isTimeUp) && (this.state.score > 500 && this.state.score <= 1000)){
      this.checkHighScore();
      return(
        <Paper>
          <H1>Not Bad!</H1>
          <h2 style={{color:'white'}}> Your final score was {this.state.score}</h2>
          <Link to={'/'}>
          <Button>Play Again?</Button>
          </Link>
        </Paper>
      )
    }  else if((currentQuestionIndex === questions.length || this.state.isTimeUp) && (this.state.score > 1000 && this.state.score <= 1400)){
      this.checkHighScore();
      return(
        <Paper>
          <H1>Good!</H1>
          <h2 style={{color:'white'}}> Your final score was {this.state.score}</h2>
          <Link to={'/'}>
          <Button>Play Again?</Button>
          </Link>
        </Paper>
      )
    }  
    

     else if((currentQuestionIndex === questions.length || this.state.isTimeUp) && this.state.score >= 1500){
    
      
        

      return(
        <div>
        <Timer initialTime={500}
        direction="backward"
  
        checkpoints={[
          {time: 0,
          callback: () => {this.advanceRound()}}
        ]}>
           </Timer>
     
          <Paper>
            <h1 style={{color:'white', fontSize:'50px'}}>Excellent!</h1>
            <h2 style={{color:'white'}}> Your final score was {this.state.score}, Welcome to Sudden Death!!</h2>
          </Paper>
          </div>
        ) 
      } else if(questions.length > 0) {
          if(!currentQuestion.answers){
            getAnswers();
          }
      console.log(currentQuestion.answerA);
    return(
    <div>
      <div style={{display:'inline'}}>
        <Count>
        <Score>Score: {this.state.score}</Score>
        <Time>
        <Timer   initialTime={this.state.time}
          direction="backward"

          checkpoints={[
            {time: 0,
            callback: () => {this.setState({isTimeUp: true})}}
          ]}>
        <Timer.Minutes /> 
      :
        <Timer.Seconds />
        </Timer>
        </Time>
        </Count>
      </div>

    <QuestionPaper>
      <QuestionAndAnswers>
       <Question>{currentQuestion.question}</Question>
       <Answers>
       {currentQuestion.answers.map((answer) => {
           if(this.state.correct === null) {
         return <Answer key={Math.random()} onClick={()=>{this.isCorrect(currentQuestion.correct, answer)}}>{answer}</Answer>
           } else if(this.state.correct === true)  {
               if(answer === currentQuestion.correct) {
               return <Answer style={{backgroundColor:'green', border:'none', color:'white'}} key={Math.random()} >{answer}</Answer>
               } else {
                   return <Answer style={{backgroundColor:'#b3b5b4', border:'none', color:'white'}} key={Math.random()} >{answer}</Answer>
               }
           }  else if(this.state.correct === false)  {
            if(answer === currentQuestion.correct) {
                return <Answer style={{backgroundColor:'#07b822', border:'none', color:'white'}} key={Math.random()} >{answer}</Answer>
                } else {
            return <Answer style={{backgroundColor:'#fc8f8d', border:'none', color:'white'}} key={Math.random()} >{answer}</Answer>
                }
        }
       })}
       </Answers>
       </QuestionAndAnswers>
       </QuestionPaper>
    
       </div>

    )
      } else {
        return <p> Please Wait ...</p>
      }



    //ADVANCED ROUND
    } else {
      function getAnswers() {
        let answers = [];
        answers.push(currentQuestion.answerA);
        answers.push(currentQuestion.answerB);
        answers.push(currentQuestion.answerC);
        answers.push(currentQuestion.answerD);
        for(var i = 0; i < answers.length; i++) {
          let randIndex = Math.floor(Math.random() * answers.length);
          let temp = answers[i];
          answers[i] = answers[randIndex];
          answers[randIndex] = temp;
  
  
        }
        currentQuestion.answers = answers;
      }


      let questions = this.state.questions;
      let currentQuestionIndex = this.state.currentQuestion;
      let currentQuestion = questions[currentQuestionIndex];
      
      console.log('hello from render', this.state.round)
      if(this.state.correct === false) {
        return(
          <Paper>
            <h2 style={{color:'white'}}> Wrong Answer :(</h2>
            <h2 style={{color:'white'}}> Your final score was {this.state.score}</h2>
            <Link to={'/'}>
              <Button>Play Again?</Button>
            </Link>
          </Paper>
        )
    
      }  
      else if(this.state.correct === true && this.state.round === 'revRound'){
        return(
          <Paper>
            <h1 style={{color:'white', fontSize:'50px'}}>Rock On!</h1>
            <h2 style={{color:'white'}}> You answered all of the advanced questions correctly!</h2>
            <h2 style={{color:'white'}}> Your final score is {this.state.score}</h2>
      
          </Paper>
        ) }
       else if(this.state.correct === true){
        setTimeout(this.advanceRound(), 5000)
        return(
          <Paper>
            <h1 style={{color:'white', fontSize:'50px'}}>Rock On!</h1>
            <h2 style={{color:'white'}}> You answered right!</h2>
            <h2 style={{color:'white'}}> Your score is {this.state.score}</h2>
            
          </Paper>
        ) }
        else if(questions.length > 0) {
          if(!currentQuestion.answers){
            getAnswers();
          }
        console.log(currentQuestion.answerA);
      return(
      <div>
        <div style={{display:'inline'}}>
          <Count>
            <Score>Score: {this.state.score}</Score>
          </Count>
        </div>
  
     
        <AdvancedQuestion>
          <H1 style={{color:'purple', fontWeight:'1200'}}>{this.state.roundString}</H1>
         <Question>{currentQuestion.question}</Question>
          <Answers>
            {currentQuestion.answers.map((answer) => {
              if(this.state.correct === null) {
                return <Answer key={Math.random()} onClick={()=>{this.isCorrect(currentQuestion.correct, answer)}}>{answer}</Answer>
              } else if(this.state.correct === true)  {
                  if(answer === currentQuestion.correct) {
                      return <Answer style={{backgroundColor:'green', border:'none', color:'white'}} key={Math.random()} >{answer}</Answer>
                      } else {
                          return <Answer style={{backgroundColor:'#b3b5b4', border:'none', color:'white'}} key={Math.random()} >{answer}</Answer>
                      }
                  }  else if(this.state.correct === false)  {
                    if(answer === currentQuestion.correct) {
                        return <Answer style={{backgroundColor:'#07b822', border:'none', color:'white'}} key={Math.random()} >{answer}</Answer>
                        } else {
                    return <Answer style={{backgroundColor:'#fc8f8d', border:'none', color:'white'}} key={Math.random()} >{answer}</Answer>
                        }
                }
              })}
            </Answers>
            </AdvancedQuestion>
      
      
         </div>
  
      )
        } else {
          this.getQuestionsForRound()
          return <p> Please Wait ...</p>
        }

    }
  }
}

export default QuizPage;