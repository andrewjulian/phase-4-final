import React from "react";
import MyQuestionCard from "./MyQuestionCard";

const MyQuestions = ({
  currentUser,
  allQuestions,
  addComment,
  handleDeleteQuestion,
  updateAnsweredQuestions,
}) => {
  const displayMyQuestions = allQuestions
    .filter((question) => {
      return question.user.id === currentUser.id;
    })
    .map((question, id) => {
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

  /*    const findMyQuestions = allQuestions.filter(
      (question) => question.user.id === currentUser.id
    );

    const displayMyQuestions = findMyQuestions.map((question, id) => {
      return (
        <MyQuestionCard
          question={question}
          handleDeleteQuestion={handleDeleteQuestion}
          updateAnsweredQuestions={updateAnsweredQuestions}
          addComment={addComment}
          key={id}
        />
      );
    }); */

  if (displayMyQuestions.length > 0) {
    return <div>{displayMyQuestions}</div>;
  }

  return <div>No Question Yet</div>;
};

export default MyQuestions;
