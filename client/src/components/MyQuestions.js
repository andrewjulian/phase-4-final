import React from 'react'
import MyQuestionCard from './MyQuestionCard'

const MyQuestions = ({currentUser}) => {

  if (currentUser.questions.length > 0) {
    const displayMyQuestions = currentUser.questions.map((question, id) => {
      return <MyQuestionCard question={question} key={id} />
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