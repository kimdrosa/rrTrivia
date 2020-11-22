import React from 'react';
import { render } from 'react-dom';
import Question from './styles/Question.js';
import Answer from './styles/Answer.js';
import Answers from './styles/Answers.js';
import QuestionPaper from './styles/QuestionPaper.js'
import QuestionAndAnswers from './styles/QuestionAndAnswers.js';
import Paper from './styles/Paper.js';
import Score from './styles/Score.js';
import Button from './styles/Button.js';
import App from './App.js';




class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        this.isCorrect = this.isCorrect.bind(this);
        this.state = {
            questions: [],
            currentQuestion: 0,
            correct: null,
            numCorrect: 0,
            numQuestions: 0
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
     
      console.log(this.state.questions)

      
      // let questionKeys = this.props.data;
      // let qs = [];
      // for(var i = 0; i < questionKeys.length; i++) {
      //   let randIndx = Math.floor(Math.random(questionKeys.length));
      //   let newVal = questionKeys[randIndx];
      //   questionKeys[randIndx] = questionKeys[i];
      //   questionKeys[i] = newVal;
      //   }
  
      // for(var j = 0; j < questionKeys.length; j++) {
      //   qs.push(this.props.data[questionKeys[j]]);
      // }
      // this.setState({
      //   questions: qs
      // })
    }


    //checks if clicked answer is the correct answer
    isCorrect (q, ans){ 
        if(q === ans) {
            this.setState({correct: true, answered:true});
         
            setTimeout(()=>{
              this.setState({
                correct: null, 
                currentQuestion: this.state.currentQuestion + 1,
                numCorrect: this.state.numCorrect + 1,
                numQuestions: this.state.numQuestions + 1}
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
    }
        
    

    //returns: number of questions out of total, the score, the time remaining 
    //and the question with four answers
    render () {
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
      //get Answer A, Answer B, Answer C and Answer D
      
    if(currentQuestionIndex === questions.length){
      return(
        <Paper>
          <h2 style={{color:'white'}}> You got {this.state.numCorrect} out of {this.state.numQuestions} correct!</h2>
          <Button>Play Again?</Button>
        </Paper>
      )

    } else if(questions.length > 0) {
        if(!currentQuestion.answers){
      getAnswers();
        }
      console.log(currentQuestion.answerA);
    return(
    <div>
    <Score>{this.state.numQuestions}/{this.state.questions.length}</Score>
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
    }
}

export default QuizPage;