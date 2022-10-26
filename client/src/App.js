import './App.css';
import {Routes, Route} from "react-router-dom"
import Landing from './components/Landing';
import Questions from './components/Questions';
import MyQuestions from './components/MyQuestions';
import Profile from './components/Profile';
import Signup from './components/Signup';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/myquestions" element={<MyQuestions />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
