import React, { useState, useEffect } from 'react';
const axios = require('axios');

const Questions = () => {

  const [data, setData] = useState([]);

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
      <p>{question}</p>
    ))
    }</div>
    {/* <div>{data}</div> */}
    <div>sdcedced</div>
    </>
  )
}

export default Questions