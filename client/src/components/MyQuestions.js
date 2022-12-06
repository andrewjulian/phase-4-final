import React from "react";
import MyQuestionCard from "./MyQuestionCard";

const MyQuestions = ({
  currentUser,
  allQuestions,
  addComment,
  handleDeleteQuestion,
}) => {
  if (currentUser.questions.length > 0) {
    const findMyQuestions = allQuestions.filter(
      (question) => question.user.id === currentUser.id
    );

    const displayMyQuestions = findMyQuestions.map((question, id) => {
      return (
        <MyQuestionCard
          question={question}
          handleDeleteQuestion={handleDeleteQuestion}
          addComment={addComment}
          key={id}
        />
      );
    });

    return <div>{displayMyQuestions}</div>;
  }

  return <div>No Question Yet</div>;
};

export default MyQuestions;
