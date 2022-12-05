import React, {useState} from 'react'
import CommentText from './CommentText';

const QuestionCard = ({question, addComment}) => {

  const {title, details} = question

  const [createComment, setCreateComment] = useState(false);
  const [seeComments, setSeeComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [errors, setErrors] = useState([]);


  function toggleComment() {
    setCreateComment(!createComment)
  }

  function toggleSeeComments(){
    setSeeComments(!seeComments)
    console.log("clicked", seeComments)
  }

  const questionComments = question.comments.map((comment, id) => {
    return <CommentText comment={comment} key={id} />
  })

  function handleCommentSubmit(e){
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question_id: question.id,
        response: commentText,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          addComment(r)});
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    setCommentText("");
  }

  if (createComment === true) {
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

  if (seeComments === true) {
    return (
    <>
      <h2>{title}</h2>
      <p>{details}</p>
      {questionComments}
      <button onClick={toggleComment}>
        Add Comment
      </button>
      <button onClick={toggleSeeComments}>
        See Comments
      </button>
    </>
  )}

  return (
    <div>
      <h2>{title}</h2>
      <p>{details}</p>
      <button onClick={toggleComment}>
        Add Comment
      </button>
      <button onClick={toggleSeeComments}>
        See Comments
      </button>
    </div>
  )
}

export default QuestionCard