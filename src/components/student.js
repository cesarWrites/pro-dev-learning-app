import React, {useEffect, useState} from "react";
import axios from 'axios';
import NavBar from "./NavBar";


function Students(){
  const[students, setStudents] = useState([])

  useEffect(()=>{
      getStudentDetails();
  }, [])
  const getStudentDetails =() =>{
      axios
      .get('http://localhost:9292/students')
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
                    <div className="use-name">
                      <h1>{student.username}</h1>
                      </div>
                      <div className="stat-det">
                              <h1>{student.status } </h1>
                              </div>      
                      </div>
              ))}
              </div>
      </div>
  )
};

export default Students;