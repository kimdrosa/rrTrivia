import React from 'react';
import QuestionCard from './QuestionCard.js'
import data from './testData.js';
import { render } from 'react-dom';
import Question from './styles/Question.js';
import Answer from './styles/Answer.js';
import Answers from './styles/Answers.js';
import QuestionAndAnswers from './styles/QuestionAndAnswers.js';




class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            questions : {}
        };
    }

    onComponentDidMount() {
      
    }
   
        

    

    //returns: number of questions out of total, the score, the time remaining 
    //and the question with four answers
    render () {
      
    return(
      <QuestionCard data={this.props.data}></QuestionCard>

    )
    }
}

export default QuizPage;