import React, {useEffect, useState} from "react";
import axios from 'axios';
import NavBar from "./NavBar";
import {useNavigate} from "react-router-dom";

function Courses(){
    const[courses, setCourses] = useState([])
    const navigate = useNavigate();
    const handleClick = id => {
        navigate(`${id}`)
      };

    useEffect(()=>{
        getCourseDetails();
    }, [])
    const getCourseDetails =() =>{
        axios
        .get('http://localhost:9292/courses')
        .then((res)=>{
            console.log(res);
            setCourses(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
  
    };

    return(
        <div className="all-courses">
            <NavBar/>
            <h1>Available courses</h1>
            <div className="course-container">
            {courses.map((course) => (
                    <div className="course-det" key = {course.id}>
                        <h2>{course.title}</h2>
                        <div className="course-inst-det">
                          
                                <h3>Rating: {course.rating } </h3>
                                <span className="star">&#9733;</span> 
                                </div>
                        <div className="book-item-det">
                        <h3>Description:{course.description}</h3>
                        <div>
<button className="start-btn" onClick={() => handleClick(course.id)}>Start</button>
    </div>
                        
                        </div>
                        </div>
                ))}
                </div>
        </div>
    )
}

export default Courses;