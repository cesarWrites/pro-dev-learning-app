import React, {useEffect, useState} from "react";
import axios from "axios";
function Lessons(){
    const[lessons, setLessons] = useState([])
    useEffect(()=>{
        getAllLessons()
    })

    const getAllLessons =() =>{
        axios
        .get('http://localhost:9292/lessons')
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
        </div>
    )
}

export default Lessons;