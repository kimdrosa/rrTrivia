import React from 'react';
import data from './testData.js';
import { render } from 'react-dom';
import Question from './styles/Question.js';
import Answer from './styles/Answer.js';
import Answers from './styles/Answers.js';
import QuestionAndAnswers from './styles/QuestionAndAnswers.js';
import Paper from './styles/Paper.js';




class QuestionCard extends React.Component {
    constructor(props) {
        super(props);
        this.isCorrect = this.isCorrect.bind(this);
        this.state = {
            correct: null,
            answered: false
        };
    }

    onComponentDidMount() {
      
    }
    //checks if clicked answer is the correct answer
    isCorrect (q, ans){ 
        if(q === ans) {
            this.setState({correct: true, answered:true});
        } else {
            this.setState({correct: false, answered: true});
        }
    }
        
    

    //returns: number of questions out of total, the score, the time remaining 
    //and the question with four answers
    render () {
        // console.log(this.state)
    return(
    <Paper>
      <QuestionAndAnswers>
       <Question>{this.props.data.q1.question}</Question>
       <Answers>
       {this.props.data.q1.answers.map((answer) => {
           if(this.state.correct === null) {
         return <Answer key={Math.random()} onClick={()=>{this.isCorrect(this.props.data.q1.correct, answer)}}>{answer}</Answer>
           } else if(this.state.correct === true)  {
               if(answer === this.props.data.q1.correct) {
               return <Answer style={{backgroundColor:'green', border:'none', color:'white'}} key={Math.random()} >{answer}</Answer>
               } else {
                   return <Answer style={{backgroundColor:'grey', border:'none', color:'white'}} key={Math.random()} >{answer}</Answer>
               }
           }  else if(this.state.correct === false)  {
            if(answer === this.props.data.q1.correct) {
                return <Answer style={{backgroundColor:'green', border:'none', color:'white'}} key={Math.random()} >{answer}</Answer>
                } else {
            return <Answer style={{backgroundColor:'red', border:'none', color:'white'}} key={Math.random()} >{answer}</Answer>
                }
        }
       })}
    
       </Answers>
       </QuestionAndAnswers>
       </Paper>

    )
    }
}

export default QuestionCard;