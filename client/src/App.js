import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./components/Landing";
import OpenQuestions from "./components/OpenQuestions";
import MyQuestions from "./components/MyQuestions";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [allQuestions, setAllQuestions] = useState([]);
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/courses")
      .then((r) => r.json())
      .then((data) => {
        setCourseList(data);
      });
  }, []);

  useEffect(() => {
    fetch("/questions")
      .then((r) => r.json())
      .then((data) => {
        setAllQuestions(data);
      });
  }, []);

  function addQuestion(newQuestion) {
    setAllQuestions([...allQuestions, newQuestion]);
    /* setCurrentUser({
      ...currentUser,
      questions: [...currentUser.questions, newQuestion],
    }); */
  }

  function addComment(newComment) {
    const findUpdateQuestion = allQuestions.find(
      (question) => question.id === newComment.question.id
    );

    findUpdateQuestion.comments.push(newComment);

    const updateQuestions = allQuestions.map((question) =>
      question.id !== newComment.question.id ? question : findUpdateQuestion
    );

    setAllQuestions(updateQuestions);
  }

  function updateAnsweredQuestions(updatedQuestion) {
    const updatedOpenQuestions = allQuestions.map((question) =>
      question.id !== updatedQuestion.id ? question : updatedQuestion
    );
    setAllQuestions(updatedOpenQuestions);
  }

  function handleDeleteQuestion(removedAssignment) {
    const updateAllQuestions = allQuestions.filter(
      (question) => question.id !== removedAssignment.id
    );
    setAllQuestions(updateAllQuestions);
  }

  if (!currentUser)
    return (
      <Routes>
        <Route
          path="/signup"
          element={<Signup setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/landing"
          element={<Landing setCurrentUser={setCurrentUser} />}
        />
        <Route path="*" element={<Navigate to="/landing" replace />} />
      </Routes>
    );

  return (
    <div className="App">
      <Navbar setCurrentUser={setCurrentUser} />
      <Routes>
        <Route
          path="/openquestions"
          element={
            <OpenQuestions
              allQuestions={allQuestions}
              addQuestion={addQuestion}
              addComment={addComment}
              courseList={courseList}
            />
          }
        />
        <Route
          path="/myquestions"
          element={
            <MyQuestions
              currentUser={currentUser}
              allQuestions={allQuestions}
              addComment={addComment}
              handleDeleteQuestion={handleDeleteQuestion}
              updateAnsweredQuestions={updateAnsweredQuestions}
            />
          }
        />
        <Route
          path="/profile"
          element={<Profile currentUser={currentUser} />}
        />
        <Route
          path="*"
          element={<Navigate to="/profile" currentUser={currentUser} replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
