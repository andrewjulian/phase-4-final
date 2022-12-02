import React, {useState} from 'react'

const QuestionCard = ({question}) => {

  const {title, details} = question

  const [createComment, setCreateComment] = useState(false)
  const [commentText, setCommentText] = useState("");

  function toggleComment() {
    setCreateComment(!createComment)
  }

  function handleCommentSubmit(e){
    e.preventDefault()
    console.log("yes")
  }

  if (createComment == true) {
    return(
      <>
        <h2>{title}</h2>
        <p>{details}</p>
        <form onSubmit={handleCommentSubmit}>
          <label>Comment </label>
          <input type="text" value={commentText} placeholder="Enter Comment" onChange={(e)=> setCommentText(e.target.value)} required></input>
          <br/>
          <button>Comment!</button>
        </form>
        <button onClick={toggleComment}>
          Nevermind
        </button>
      </>
    )
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{details}</p>
      <button onClick={toggleComment}>
        Add Comment
      </button>
    </div>
  )
}

export default QuestionCard