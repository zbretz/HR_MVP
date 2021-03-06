import React, { useState, useEffect } from 'react';
const axios = require('axios');

// https://reactjs.org/docs/forms.html


const AnswerForm = (props) => {

  const [text, setText] = useState('');

  function handleSubmit(e, text){
    const question_id = props.selectedQuestionId

    e.preventDefault();
    axios.post('http://localhost:3000/create_answer', {
      question_id: question_id,
      text: text
    })
    .then(response => (
      alert(response)
      )
    )
    .catch((error) => console.log(error.message));
  }

  return(
    <form onSubmit={(e)=>handleSubmit(e, text)}>
    {/* </form><form onSubmit={useHandleSubmit(value)}> */}
        <label>
          Text:
          <textarea id='create-text' value={text} onChange={()=>{setText(event.target.value)}}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
  )

}


export {AnswerForm};