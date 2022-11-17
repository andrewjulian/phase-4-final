import React from 'react'

const QuestionCard = ({question}) => {

  const {title, details} = question
  return (
    <div>
      <h2>{title}</h2>
      <p>{details}</p>
    </div>
  )
}

export default QuestionCard