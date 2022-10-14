import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Courses from './components/Course';
import Lessons from './components/Lesson';
import Students from './components/student'
import Instructors from './components/Instructor';
import Login from './components/pages/Login';
function App() {
  return (
    <div className="App">
      <main>
        <Router>
        <Routes>
          <Route path="/" element={<Home />}
          />
           <Route path="login" element={<Login />}
          />
          <Route path="courses"
          element={<Courses />}
          />
          <Route path="lessons" element={<Lessons/>}/>
          <Route path="students" element={<Students />}
          />
           <Route path="instructors" element={<Instructors />}
          />
        </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
