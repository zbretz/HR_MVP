let QA = require('./qa')



// let questionsSchema = new mongoose.Schema({
//   title: {type: String, required: true, unique: true},
//   text: {type: String, required: true},
//   date: { type: Date, default: Date.now },
//   author: mongoose.ObjectId,
//   answers: []
// })

// let answersSchema = new mongoose.Schema({
//   text: {type: String, required: true},
//   date: { type: Date, default: Date.now },
//   author: mongoose.ObjectId,
//   question: mongoose.ObjectId
// })

// module.exports = {
//   questionsModel: mongoose.model('Questions', questionsSchema),
//   answersModel: mongoose.model('Answers', answersSchema)
// }

let mongoose = require('mongoose')


let idToQuery = "4ecc05e55dd98a436ddcc47c";
idToQuery = mongoose.Types.ObjectId(idToQuery)

let q_Id = "6125b4b858dd643905644cfd"
q_Id = mongoose.Types.ObjectId(q_Id)

const createQ = function(username, email, bio){
  let question = new QA.questionsModel({
    title: 'first question',
    text: 'question text',
    author: idToQuery
  })
  question.save()
  .then(doc => {
    console.log(doc)
    // callback(null, doc)
  })
  .catch(err => {
    console.log(err)
  //  callback(err, null)
  })
}

// createQ()

const createA = function(){
  let answer = new QA.answersModel({
    text: 'firstAnswer',
    author: idToQuery,
    question: q_Id
  })
  answer.save()
  .then(doc => {
    console.log(doc)
    // callback(null, doc)
  })
  .catch(err => {
    console.log(err)
  //  callback(err, null)
  })
}

createA()