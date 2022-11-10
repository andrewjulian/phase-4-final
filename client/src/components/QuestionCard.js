import React from 'react'


const QuestionCard = ({question}) => {

  const {title, details, image_url} = question
  return (
    <div>
      <h2>{title}</h2>
      <p>{details}</p>
      <p>{image_url}</p>
    </div>
  )
}

export default QuestionCard