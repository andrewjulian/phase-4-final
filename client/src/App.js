import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
