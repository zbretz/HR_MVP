let QA = require('./qa')

let mongoose = require('mongoose')


let idToQuery = "4ecc05e55dd98a436ddcc47c";
idToQuery = mongoose.Types.ObjectId(idToQuery)

// let q_Id = "6125b4b858dd643905644abc"
// q_Id = mongoose.Types.ObjectId(q_Id)

// randAnsId = q_Id = "6125b4b858dd643905644cfd"
// randAnsId = mongoose.Types.ObjectId(randAnsId)

// '6126ad2971fb4616c1b95c04'
// '6126ad38d208d816d658286b'

const createQ = function(title, text){
  let question = new QA.questionsModel({
    title: title,
    text: text,
    author: idToQuery
  })
  return question.save()
  // .then(doc => {
  //   console.log(doc)
  // })
  // .catch(err => {
  //   console.log(err)
  // })
}

//  createQ()

const createA = function(){
  let answer = new QA.answersModel({
    text: '2nd Q, 3rd Answer',
    author: idToQuery,
    question: mongoose.Types.ObjectId('6126ad38d208d816d658286b')
  })
  return answer.save()
  .then(answer => {
    console.log(answer)
    return QA.questionsModel.findByIdAndUpdate(
      '6126ad38d208d816d658286b',
      {
        $push:{
          answers: answer._id
        }
      },
      {new:true}
    )
    .then(doc => {
      console.log(doc)
    })
  })
  .catch(err => {
    console.log(err)
  })
}

create_q_id = '6126ad38d208d816d658286b'

const createAForm = function(id, text){
  let answer = new QA.answersModel({
    text: text,
    author: idToQuery,
    question: mongoose.Types.ObjectId(id)
  })
   return answer.save()
  .then(answer => {
    console.log(answer)
    return QA.questionsModel.findByIdAndUpdate(
      id,
      {
        $push:{
          answers: answer._id
        }
      },
      {new:true}
    )
  })
}

//  createAForm(create_q_id)
//  .then(doc => {
//   console.log(doc)
// })
// .catch(err => {
//   console.log(err)
// })

// var ques = QA.questionsModel.findByIdAndUpdate(
//   q_Id,
//   {
//     $push:{
//       answers: randAnsId
//     }
//   },
//   {new:true}
//   )
// .then((doc)=>{
//   console.log(doc)
// })


const answersByQuestionId = ()=>{
  var prod = QA.questionsModel.findById("6126ad38d208d816d658286b")

  prod.then(all => {
  return QA.answersModel.find({_id: { $in : all.answers } })
  }
  ).then(docs => {
    console.log(docs)
  })
}




const allAnswers = (questions, callback) => {
  QA.answersModel.find({})
  .then(a=>{
    a.forEach(a=>{
      console.log(a)
    questions[String(a.question._id)].push([a.text])
    })
    questions = Object.keys(questions).map((key) => [key, questions[key]]);
    console.log(questions)
    callback(null, questions)

    })
    .catch(err => {console.log(err)})

    // return questions

}

const allQuestionsWithAnswers = (callback) => {
  var questions = []

  QA.questionsModel.find({})
  .then(q=>{
    q.forEach(q=>{
    questions[q._id] = [q.title]
    })
    console.log(questions)
    allAnswers(questions, callback)
  })

}



// answersByQuestionId()
// allQuestionsWithAnswers()
// .then(q => console.log(q))
// allAnswers()
// .then(a => console.log(a))




// QA.answersModel.find({_id: { $in : ["6126922dd5dadf13325f17e8"] } })
// .then(all => console.log(all))


// QA.answersModel.findById("6126922dd5dadf13325f17e8")
// .then(all => console.log(all))

// var prod = QA.questionsModel.findById("6125b4b858dd643905644cfd")
// .then(all => {
//   console.log(
//     all.answers.indexOf("6126922dd5dadf13325f17e8")
//     )
// })

module.exports = {allQuestionsWithAnswers, createQ, createAForm}


// QA.questionsModel.aggregate.lookup({
//   from: QA.answersModel,
//   localField: "_id",
//   foreignField: "userId",
//   as: 'answers'
// })

// QA.questionsModel.aggregate([{
//   $lookup: {
//   from: "Answers",
//   localField: "question",
//   foreignField: "_id",
//   as: 'answwwwers'
//   }
// }], function(err,res){
//   console.log(res)
// })