import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import Landing from './components/Landing';
import Questions from './components/Questions';
import MyQuestions from './components/MyQuestions';
import Profile from './components/Profile';
import Signup from './components/Signup';
import React, {useEffect, useState} from "react"
import Navbar from './components/Navbar';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [questions, setQuestions] = useState()

  function addQuestion(newQuestion){
    setQuestions(...questions, newQuestion)
  }

  useEffect(()=> {
    fetch('/auth')
    .then(res=> {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
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
        <Route path="/questions" element={<Questions questions={questions} addQuestion={addQuestion} setCurrentUser={setCurrentUser} />} />
        <Route path="/myquestions" element={<MyQuestions setCurrentUser={setCurrentUser} />} />
        <Route path="/profile" element={<Profile setCurrentUser={setCurrentUser}/>} />
        <Route path="*" element={<Navigate to="/questions" replace />} />
      </Routes>
    </div>
  );
}

export default App;
