import React from 'react'
import QuestionCard from './QuestionCard'


const MyQuestions = ({allQuestions, currentUser}) => {

  //const onlyMyQuestions = allQuestions.filter((question) => question.user.id === currentUser.id)
  if (currentUser.questions.length > 0) {
    const displayMyQuestions = currentUser.questions.map((question, id) => {
      return <QuestionCard question={question} key={id} />
    })

    return (
      <div>
        {displayMyQuestions}
      </div>
    )
  }

  return (
    <div>
      No Question Yet
    </div>
  )
}

export default MyQuestions