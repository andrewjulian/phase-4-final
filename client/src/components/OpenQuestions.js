import React, {useState} from 'react'
import QuestionCard from './QuestionCard';

const OpenQuestions = ({openQuestions, addQuestion}) => {

  //console.log("open questions in questions", openQuestions)

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [createQuestion, setCreateQuestion] = useState(false)
  const [errors, setErrors] = useState([])

  function toggleAddQuestion(){
    setCreateQuestion(!createQuestion)
  }

  const displayQuestions = openQuestions.map((question, id) => {
    return <QuestionCard question={question} key={id}/>
  })

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        details,
        image_url: imageUrl,
        open: true,
      }),

    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          console.log(r)
          addQuestion(r)});
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  if(createQuestion === true) {
    return(
      <div>
        <button onClick = {toggleAddQuestion}>
          Review Questions
        </button>
        <form onSubmit={handleSubmit}>
          <label>Question Title</label>
          <input type="text" value={title} placeholder="Enter Question Title" onChange={(e)=> setTitle(e.target.value)} required></input>
          <br/>
          <label>Question Details</label>
          <input type="text" value={details} placeholder="Enter Question Details" onChange={(e)=> setDetails(e.target.value)} required></input>
          <br/>
          <label>Optional Image URL</label>
          <input type="text" value={imageUrl} placeholder="Add Optional Image" onChange={(e)=> setImageUrl(e.target.value)}></input>
          <br/>
          <button onSubmit={handleSubmit}>Ask!</button>
        </form>
      </div>
    )
  }

  //this will render questions via question cards mapped from questions prop that is passed from app.js
  return (
    <div>
      <p>Questions</p>
      <button onClick = {toggleAddQuestion}>
        Add a question!
      </button>
        {displayQuestions}
    </div>
  )
}

export default OpenQuestions