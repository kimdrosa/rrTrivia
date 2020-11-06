import React from 'react';
import data from './testData.js';
import { render } from 'react-dom';
import Question from './styles/Question.js';
import Answer from './styles/Answer.js';
import Answers from './styles/Answers.js';
import QuestionAndAnswers from './styles/QuestionAndAnswers.js';




class QuestionCard extends React.Component {
    constructor(props) {
        super(props);
        this.isCorrect = this.isCorrect.bind(this);
        this.state = {
           
        };
    }

    onComponentDidMount() {
      
    }
    //checks if clicked answer is the correct answer
    isCorrect (q, ans){ 
        if(q.correct === ans) {
            this.setState({correct: true});

        }
    }
        

    

    //returns: number of questions out of total, the score, the time remaining 
    //and the question with four answers
    render () {
        // console.log(this.state)
    return(
      <QuestionAndAnswers>
       <Question>{this.props.data.q1.question}</Question>
       <Answers>
       {this.props.data.q1.answers.map((answer) => (
         <Answer >{answer}</Answer>
       ))}
       {/* <Answer> {this.props.data.q1.answers[1]}</Answer> */}
       </Answers>
       </QuestionAndAnswers>

    )
    }
}

export default QuestionCard;