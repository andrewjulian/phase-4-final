import React from "react";
import MyQuestionCard from "./MyQuestionCard";

const MyQuestions = ({
  currentUser,
  addComment,
  handleDeleteQuestion,
  updateAnsweredQuestions,
}) => {
  let displayMyQuestions = null;

  if (currentUser.questions !== undefined) {
    if (currentUser.questions.length > 0) {
      displayMyQuestions = currentUser.questions.map((question, id) => {
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
    } else {
      displayMyQuestions = "No questions yet!";
    }
  } else {
    displayMyQuestions = "No questions yet!";
  }

  return (
    <div className="question-cards">
      <h2>My Questions</h2>
      {displayMyQuestions}
    </div>
  );
};

export default MyQuestions;
