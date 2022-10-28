import './App.css';
import {Routes, Route} from "react-router-dom"
import Landing from './components/Landing';
import Questions from './components/Questions';
import MyQuestions from './components/MyQuestions';
import Profile from './components/Profile';
import Signup from './components/Signup';
import React, {useState} from "react"

function App() {

  const [currentUser, setCurrentUser] = useState("")

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup setCurrentUser={setCurrentUser} />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/myquestions" element={<MyQuestions />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
