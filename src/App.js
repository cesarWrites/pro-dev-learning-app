import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Courses from './components/Course';
import Lessons from './components/Lesson';
import Students from './components/student'
import Instructors from './components/Instructor';
function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />}
          />
          <Route path="courses"
          element={<Courses />}
          />
          <Route path="courses/:id" element={<Lessons/>}/>
          <Route path="students" element={<Students />}
          />
           <Route path="instructors" element={<Instructors />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
