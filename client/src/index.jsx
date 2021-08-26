import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './components/Questions.jsx'


const App = () => {
  return (
   <Questions/>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);