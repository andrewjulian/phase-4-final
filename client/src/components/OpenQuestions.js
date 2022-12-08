import React, { useState } from "react";
import QuestionCard from "./QuestionCard";

const OpenQuestions = ({
  allQuestions,
  addQuestion,
  addComment,
  courseList,
}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [course, setCourse] = useState();
  const [createQuestion, setCreateQuestion] = useState(false);
  const [errors, setErrors] = useState([]);

  const listofCourses = courseList.map((course, id) => {
    return (
      <option key={id} value={course.id}>
        {course.course_name}
      </option>
    );
  });

  function toggleAddQuestion() {
    setCreateQuestion(!createQuestion);
  }

  function selectCourse(e) {
    setCourse(e.target.value);
  }

  const onlyOpenQuestions = allQuestions.filter(
    (question) => question.open === true
  );

  const displayOpenQuestions = onlyOpenQuestions.map((question, id) => {
    return (
      <QuestionCard addComment={addComment} question={question} key={id} />
    );
  });

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
        open: true,
        course_id: course,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          addQuestion(r);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    setTitle("");
    setDetails("");
    setCourse(null);
    setCreateQuestion(false);
  }

  if (createQuestion === true) {
    return (
      <div>
        <button onClick={toggleAddQuestion}>Review Questions</button>
        <form onSubmit={handleSubmit}>
          <label>Question Title</label>
          <input
            type="text"
            value={title}
            placeholder="Enter Question Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          <br />
          <label>Question Details</label>
          <input
            type="text"
            value={details}
            placeholder="Enter Question Details"
            onChange={(e) => setDetails(e.target.value)}
            required
          ></input>
          <br />
          <label>Course</label>
          <select onChange={selectCourse} defaultValue="">
            <option value="" disabled>
              Choose a Class...
            </option>
            {listofCourses}
          </select>
          <br />
          <button onSubmit={handleSubmit}>Ask!</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <p>Questions</p>
      <button onClick={toggleAddQuestion}>Add a question!</button>
      {displayOpenQuestions}
    </div>
  );
};

export default OpenQuestions;
