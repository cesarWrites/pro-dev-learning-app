import React, {useEffect, useState} from "react";
import axios from "axios";
import CompleteCourse from "./APIs/completeCourse";

function Lessons(){
    
    const[lessons, setLessons] = useState([])
    let [show, setForm] = useState(false);
    function handleClick(){
      setForm(true);
    }
    useEffect(()=>{
        getAllLessons()
    })

    const getAllLessons =() =>{
        axios
        .get('https://arcane-gorge-73424.herokuapp.com/lessons')
        .then((res)=>{
            console.log(res);
            setLessons(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
  
    };
    return(
        <div className='lesson-div' >
             {lessons.map((lesson) => (
                <div className="lesson-det" key = {lesson.id}>
                    <h2>{lesson.course_id}</h2>
                    <h3>{lesson.topic}</h3>
                    <p>{lesson.description}</p>
                    </div>
                    ))}
                   
              <button className="complete-course-btn" onClick={handleClick}>Complete</button>
        {show ? <CompleteCourse/> : null}

        </div>
    )
}

export default Lessons;