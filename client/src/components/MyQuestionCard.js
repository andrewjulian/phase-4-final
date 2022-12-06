import React, { useState } from "react";

const MyQuestionCard = ({ question, handleDeleteQuestion }) => {
  const { id, title, details } = question;

  const [answered, setAnswered] = useState("Unanswered");

  function toggleAnswered() {
    setAnswered(answered === "Unanswered" ? "Answered" : "Unanswered");
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

  return (
    <div>
      <h2>{title}</h2>
      <p>{details}</p>
      <button onClick={toggleAnswered}>{`${answered}`}</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default MyQuestionCard;
