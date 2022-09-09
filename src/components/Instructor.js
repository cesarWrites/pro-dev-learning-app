import React, {useEffect, useState} from "react";
import axios from 'axios';
import NavBar from "./NavBar";
import DeleteStudent from "./APIs/DeleteStudent";

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
        <div className="instructor-div">
            <NavBar/>
            <h1>Instructor profiles</h1>
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
            <DeleteStudent/>
            </div>
    )
}

export default Instructors;