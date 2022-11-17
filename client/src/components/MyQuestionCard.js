import React, {useState} from 'react'


const MyQuestionCard = ({question}) => {

  const [answered, setAnswered] = useState("Unanswered")
  
  function toggleAnswered(){ 
    console.log("clicked!")
    setAnswered((answered === "Unanswered") ? "Answered" : "Unanswered")
  }

  const {title, details} = question
  return ( 
    <div>
      <h2>{title}</h2>
      <p>{details}</p>
      <button onClick={toggleAnswered}>
        {`${answered}`}
      </button>
    </div>
  )
}

export default MyQuestionCard