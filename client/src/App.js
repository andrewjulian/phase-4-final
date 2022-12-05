import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import Landing from './components/Landing';
import OpenQuestions from "./components/OpenQuestions"
import MyQuestions from './components/MyQuestions';
import Profile from './components/Profile';
import Signup from './components/Signup';
import React, {useEffect, useState} from "react"
import Navbar from './components/Navbar';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [allQuestions, setAllQuestions] = useState([])

  function addQuestion(newQuestion){
    setAllQuestions([...allQuestions, newQuestion])
    setCurrentUser({...currentUser, questions:[...currentUser.questions, newQuestion]})
  }

  //need to add comment to the specific question
  //return from POST should have question_id to help find that question
  //add comment to question comments
  //upate questions in state?

  function addComment(newComment){
    console.log("Add comment function called")
  }

  useEffect(()=> {
    fetch('/auth')
    .then(res=> {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })

    fetch("/questions")
      .then((r) => r.json())
      .then(data => {
        setAllQuestions(data)
    });

  },[])

  if(!currentUser) return (
    <Routes>
      <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
      <Route path="/landing" element={<Landing setCurrentUser={setCurrentUser} />} />
      <Route path="*" element={<Navigate to="/landing" replace />} />
    </Routes>
  ) 

  return (
    <div className="App">
      <Navbar setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/openquestions" element={<OpenQuestions allQuestions={allQuestions} addQuestion={addQuestion} addComment={addComment} />} />
        <Route path="/myquestions" element={<MyQuestions currentUser={currentUser} />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<Navigate to="/openquestions" replace />} />
      </Routes>
    </div>
  );
}

export default App;
