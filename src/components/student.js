import React, {useEffect, useState} from "react";
import axios from 'axios';
import NavBar from "./NavBar";
import Footer from "./footer";
import CreateStudent from "./APIs/CreateStudent";


function Students(){
  const[students, setStudents] = useState([])
  let [isStudent, setIsStudent] = useState(false);

  function handleClick(){
    setIsStudent(true);
  }
  useEffect(()=>{
      getStudentDetails();
  }, [])
  const getStudentDetails =() =>{
      axios
      .get('https://arcane-gorge-73424.herokuapp.com/students')
      .then((res)=>{
          console.log(res);
          setStudents(res.data);
      })
      .catch((err) => {
          console.log(err);
      })

  };

  return(
      <div className="all-courses">
          <NavBar/>
          <h1>Student details</h1>
          <div className="student-container">
          {students.map((student) => (
                  <div className="student-det" key = {student.id}>
                    <div className="id">
                        <h1>{student.id}</h1>
                    </div>
                    <div className="use-name">
                      <h1>{student.studentname}</h1>
                      </div>
                      <div className="stat-det">
                              <h1>{student.status } </h1>
                              </div>     
                      </div>
              ))}
              </div>
              <button className="add-course-btn" onClick={handleClick}>New Student</button>
        {isStudent ? <CreateStudent /> : null} 
              <Footer/>
      </div>
  )
};

export default Students;