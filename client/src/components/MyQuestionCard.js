import React, { useState } from "react";
import CommentText from "./CommentText";
import "../App.css";

const MyQuestionCard = ({
  question,
  addComment,
  handleDeleteQuestion,
  updateAnsweredQuestions,
}) => {
  const { id, title, details, comments, open, course_id } = question;

  const [isOpen, setIsOpen] = useState(open);
  const [newDetails, setNewDetails] = useState();
  const [editQuestion, setEditQuestion] = useState(false);
  const [createComment, setCreateComment] = useState(false);
  const [seeComments, setSeeComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [errors, setErrors] = useState([]);

  function toggleComment() {
    setCreateComment(!createComment);
  }

  function setDetailsAsDetails(info) {
    setNewDetails(info);
  }

  function handleEditClick() {
    setDetailsAsDetails(details);
    setEditQuestion(true);
  }

  function toggleSeeComments() {
    setSeeComments(!seeComments);
  }

  const questionComments = question.comments.map((comment, id) => {
    return <CommentText comment={comment} key={id} />;
  });

  function handleUpdateQuestion(e) {
    e.preventDefault();

    fetch(`/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        open: !isOpen,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          updateAnsweredQuestions(data);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    setIsOpen(!isOpen);
  }

  ///---
  function handleCommentSubmit(e) {
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
          addComment(r);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    setCommentText("");
    setSeeComments(true);
    setCreateComment(false);
  }

  function handleQuestionEditSubmit(e) {
    e.preventDefault();

    fetch(`/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        details: newDetails,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        updateAnsweredQuestions(data);
      });

    setEditQuestion(false);
  }

  function handleDeleteClick() {
    fetch(`/questions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => handleDeleteQuestion(data));
  }

  if (createComment === true) {
    return (
      <div className="question-card">
        <h2>{title}</h2>
        <p>{details}</p>
        {questionComments}
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={commentText}
            placeholder="Enter Comment"
            onChange={(e) => setCommentText(e.target.value)}
            required
          ></input>
          <br />
          <button className="question-button">Comment!</button>
        </form>
        <button className="question-button" onClick={toggleComment}>
          Nevermind
        </button>
      </div>
    );
  } else if (seeComments === true && comments.length !== 0) {
    return (
      <div className="question-card">
        <h2>{title}</h2>
        <p>{details}</p>
        {questionComments}
        <button className="question-button" onClick={toggleComment}>
          Add Comment
        </button>
        <button className="question-button" onClick={toggleSeeComments}>
          Hide Comments
        </button>
      </div>
    );
  } else if (seeComments === true && comments.length === 0) {
    return (
      <div className="question-card">
        <h2>{title}</h2>
        <p>{details}</p>
        <h4>**No Comments Yet**</h4>
        <button className="question-button" onClick={toggleComment}>
          Add Comment
        </button>
        <button className="question-button" onClick={toggleSeeComments}>
          Hide Comments
        </button>
      </div>
    );
  } else if (editQuestion === true) {
    return (
      <div className="question-card">
        <h2>{title}</h2>
        <p>{details}</p>
        <form onSubmit={handleQuestionEditSubmit}>
          <input
            type="text"
            value={newDetails}
            onChange={(e) => setNewDetails(e.target.value)}
          ></input>
          <br />
          <button className="question-button">Submit Edit!</button>
        </form>
      </div>
    );
  }

  return (
    <div className="question-card">
      <h2>{title}</h2>
      <p>{details}</p>
      <p>Course ID {course_id}</p>
      <button className="question-button" onClick={toggleComment}>
        Add Comment
      </button>
      <button className="question-button" onClick={toggleSeeComments}>
        See Comments
      </button>
      <button
        className="question-button"
        onClick={handleUpdateQuestion}
      >{`Open to Answer ${isOpen}`}</button>
      <br />
      <button className="question-button" onClick={handleEditClick}>
        Edit Questions
      </button>
      <button className="question-button" onClick={handleDeleteClick}>
        Delete
      </button>
      {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyQuestionCard;
