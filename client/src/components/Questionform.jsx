import React, { useState, useEffect } from 'react';
const axios = require('axios');

// https://reactjs.org/docs/forms.html



const QuestionForm = (props) => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');



  function handleSubmit(e, post){
    const {title, text} = post

    e.preventDefault();
    axios.post('http://localhost:3000/create_question', {
      title: title,
      text: text
    })
    .then(response => {
      alert(response)
      console.log([response.data.text, response.data.title])
      alert(props.data[0])
      props.setData(['fake_id',response.data.text, response.data.title])
      // props.setData((props.data) => [response, ...props.data])
    }
    )
    .catch((error) => console.log(error.message));
  }

  return(
    <div className={props.formDisplay} id='question-form'>
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
      </div>
  )

}


export {QuestionForm};