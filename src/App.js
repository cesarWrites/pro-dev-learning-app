import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Course from './components/Course';
import Lesson from './components/Lesson';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />}
          />
          <Route path="/courses/:courseId"
          element={<Lesson />}
          />
          <Route path="" element={<Lesson />}
          />
        </Routes>
      </main>

    </div>
  );
}

export default App;
