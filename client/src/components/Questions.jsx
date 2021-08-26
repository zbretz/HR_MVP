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
    <div>{data.map(question => (
              <>

      <div>
        <div>{question[1][0]}  < button onClick={()=>setSelectedQuestionId(question[0])}>answer question</button></div></div>
        <p>{question[1][1]}</p>

      <div>
        {question[1].slice(2).map(
          answer => <p>{answer}</p>
        )}
      </div>
      </>

    ))}
    </div>

    {/* <div>{data}</div> */}
    <div>sdcedced</div>
    <QuestionForm/>
    <div>{selectedQuestionId}</div>
    <AnswerForm selectedQuestionId={selectedQuestionId} />
    </>
  )
}

export default Questions