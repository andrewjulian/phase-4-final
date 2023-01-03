import React from "react";
import MyQuestionCard from "./MyQuestionCard";

const MyQuestions = ({
  currentUser,
  addComment,
  handleDeleteQuestion,
  updateAnsweredQuestions,
}) => {
  const displayMyQuestions = currentUser.questions.map((question, id) => {
    return (
      <MyQuestionCard
        question={question}
        handleDeleteQuestion={handleDeleteQuestion}
        updateAnsweredQuestions={updateAnsweredQuestions}
        addComment={addComment}
        key={id}
      />
    );
  });

  if (displayMyQuestions.length > 0) {
    return <div>{displayMyQuestions}</div>;
  }

  return <div>No Question Yet</div>;
};

export default MyQuestions;
