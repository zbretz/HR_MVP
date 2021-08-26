import React, { useState, useEffect } from 'react';
const axios = require('axios');
import {QuestionForm} from './QuestionForm.jsx';


const Questions = () => {

  const [data, setData] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState('noChange');

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
    <div>{selectedQuestion}</div>
    <div>{data.map(question => (
              <>

      <div><span>{question[1][0]}</span> <button onClick={()=>setSelectedQuestion(question[0])}>answer question</button></div>
      <div>
        {question[1].slice(1).map(
          answer => <p>{answer}</p>
        )}
      </div>
      </>

    ))}
    </div>
    {/* <div>{data}</div> */}
    <div>sdcedced</div>
    <QuestionForm/>
    {/* <AnswerForm selectedQuestion={selectedQuestion} /> */}
    </>
  )
}

export default Questions