import React from 'react'
import QuestionCard from './QuestionCard'


const MyQuestions = ({allQuestions, currentUser}) => {

  const onlyMyQuestions = allQuestions.filter((question) => question.user.id === currentUser.id)
  
  const displayMyQuestions = onlyMyQuestions.map((question, id) => {
    return <QuestionCard question={question} key={id} />
  })
  console.log("my questions", displayMyQuestions);

  return (
    <div>
      {displayMyQuestions}
    </div>
  )
}

export default MyQuestions