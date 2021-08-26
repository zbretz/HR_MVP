import React, { useState, useEffect } from 'react';
const axios = require('axios');
import {QuestionForm} from './QuestionForm.jsx';
import {AnswerForm} from './AnswerForm.jsx';


const Questions = () => {

  const [data, setData] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState('no question selected');

  useEffect(() => {
    // fetch('http://localhost:3000/questions')
    axios.get('http://localhost:3000/questions')
      .then(response => (
        setData(response.data)
        // console.log(response.data)
        )
      )
      .catch((error) => console.log(error.message));
  }, [])

  return (
    <>
    <div id='content'>

    <div id='header'>
      Questions and Answers
    </div>

    <QuestionForm/>


      <div>{data.map(question => (
                <>
      <div className='question-answers'>
        <div className='question'>
          <div>
            <div> <span className='question-title'> {question[1][0]}  </span><button onClick={()=>setSelectedQuestionId(question[0])}>answer question</button></div></div>
            <p className="question-body">{question[1][1]}</p>
          </div>

        <div>
          {question[1].slice(2).map(
            answer => <p className='answer'>{answer}</p>
          )}
        </div>
      </div>
        </>

      ))}
      </div>
    </div>


    {/* <div>{data}</div> */}
    <div>{selectedQuestionId}</div>
    <AnswerForm selectedQuestionId={selectedQuestionId} />
    </>
  )
}

export default Questions