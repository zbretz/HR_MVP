import React, { useState, useEffect } from 'react';

const Questions = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/questions')
      .then(response => (
        console.log(response.json())
        // setData(response.json())
        )
      )
      .catch((error) => console.log(error.message));
  })

  return (
    <div>{data}</div>
  )
}

export default Questions