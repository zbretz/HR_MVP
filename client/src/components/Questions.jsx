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
              <>

      <div>{question[1][0]}</div>
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
    </>
  )
}

export default Questions