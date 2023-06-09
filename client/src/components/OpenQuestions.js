import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import "../App.css";

const OpenQuestions = ({ allQuestions, addQuestion, addComment }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [course, setCourse] = useState();
  const [createQuestion, setCreateQuestion] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/courses")
      .then((r) => r.json())
      .then((data) => {
        setCourseList(data);
      });
  }, []);

  let onlyOpenQuestions = null;
  let displayOpenQuestions = null;

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

  if (allQuestions !== undefined) {
    if (allQuestions.length > 0) {
      onlyOpenQuestions = allQuestions.filter(
        (question) => question.open === true
      );

      displayOpenQuestions = onlyOpenQuestions.map((question, id) => {
        return (
          <QuestionCard addComment={addComment} question={question} key={id} />
        );
      });
    } else {
      displayOpenQuestions = "No questions yet!";
    }
  } else {
    displayOpenQuestions = "No questions yet!";
  }

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
        <button className="question-button" onClick={toggleAddQuestion}>
          Review Questions
        </button>
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
          <button className="question-button" onSubmit={handleSubmit}>
            Ask!
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Questions</h1>
      <button className="question-button" onClick={toggleAddQuestion}>
        Add a question!
      </button>
      <br />
      <br />
      <div className="question-cards">{displayOpenQuestions}</div>
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

export default OpenQuestions;
