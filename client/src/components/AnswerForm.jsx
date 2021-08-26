import React, { useState, useEffect } from 'react';
const axios = require('axios');

// https://reactjs.org/docs/forms.html


const QuestionForm = (props) => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  function handleSubmit(e, post){
    const {title, text} = post
    const question_id =

    e.preventDefault();
    axios.post('http://localhost:3000/create_answer', {
      question_id: ,
      title: title,
      text: text
    })
    .then(response => (
      alert(response)
      )
    )
    .catch((error) => console.log(error.message));
  }

  return(
    <form onSubmit={(e)=>handleSubmit(e,{title,text})}>
    {/* </form><form onSubmit={useHandleSubmit(value)}> */}
        <label>
          Title:
          <textarea id='create-title' value={title} onChange={()=>{setTitle(event.target.value)}}/>
          {/* <textarea value={value} onChange={setValue(event.target.value)} onClick={clickHandler}/> */}
          Text:
          <textarea id='create-text' value={text} onChange={()=>{setText(event.target.value)}}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
  )

}


export {QuestionForm};