import React from "react";

const CommentText = ({ comment }) => {
  const { response } = comment;

  return (
    <div>
      <p>{response}</p>
    </div>
  );
};

export default CommentText;
