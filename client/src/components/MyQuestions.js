import React from 'react'
import QuestionCard from './QuestionCard'


const MyQuestions = ({userQuestions}) => {

  console.log("user questions in my question", userQuestions)

  const displayMyQuestions = userQuestions.map((question, id) => {
    return <QuestionCard question={question} key={id}/>
  })

  return (
    <div>
      {displayMyQuestions}
    </div>
  )
}

export default MyQuestions