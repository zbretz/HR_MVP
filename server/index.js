const express = require('express');
const path = require('path')
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let db = require('../database/models/qa_commands')


app.use(express.static(path.join(__dirname, '../client/dist')))


app.get('/', (req, res) => {
});

app.get('/questions', (req, res) => {
  db.allQuestionsWithAnswers((err, data)=>{
    res.send(data)
  })
});

app.post('/create_question', (req, res) => {
  console.log(req.body)
  var title = req.body.title
  var text = req.body.text
  db.createQ(title, text)
  .then(doc => res.send(doc))
  .catch(err => console.log(err))
});

app.post('/create_answer', (req, res) => {
  var question_id = req.body.question_id
  var text = req.body.text
  db.createAForm(question_id, text)

});

app.get('/api/questions', (req, res) => {
  res.send('Hello World!');
});

app.listen(, () =>
  console.log('Example app listening on port 3000!'),
);