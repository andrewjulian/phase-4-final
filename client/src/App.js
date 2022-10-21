import './App.css';
import {Routes, Route} from "react-router-dom"
import Landing from './components/Landing';
import Questions from './components/Questions';
import MyQuestions from './components/MyQuestions';
import Profile from './components/Profile';


function App() {

  


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/myquestions" element={<MyQuestions />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
