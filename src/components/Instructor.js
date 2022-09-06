import React, {useEffect, useState} from "react";
import axios from 'axios';

function Instructors(){
    const[instructors, setInstructors] = useState([])
    useEffect(()=>{
        getAllInstructorDetails();
    }, [])

    const getAllInstructorDetails =() =>{
        axios
        .get('http://localhost:9292/instructors')
        .then((res)=>{
            console.log(res);
            setInstructors(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
  
    };
    return(
        <div className="instructors-container">
        {instructors.map((instructor) => (
                <div className="instructor-det" key = {instructor.id}>
                    <img src={instructor.img_url}></img>
                    <h2>{instructor.name}</h2>
                    <div className="bio-det">
                        <p>{instructor.bio}</p>
                    </div>
                    </div>
            ))}
            </div>
    )
}

export default Instructors;