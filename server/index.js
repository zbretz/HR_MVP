const express = require('express');
const path = require('path')
const app = express();
let db = require('../database/models/qa_commands')

app.use(express.static(path.join(__dirname, '../client/dist')))


app.get('/', (req, res) => {
  // res.send('Hello World!');
});

app.get('/questions', (req, res) => {
  db.allQuestionsWithAnswers((err, data)=>{
    res.json(data)
    // res.send('sdfsdf')
  })
  // .then(docs => (
  //   res.send(docs)
  //   )
  // )
  // res.send('Hello World!');
});

app.get('/api/questions', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);