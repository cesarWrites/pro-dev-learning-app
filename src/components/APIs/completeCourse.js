import React, { useState } from "react";
import axios from 'axios';
function CompleteCourse(){
    const [id, setId] = useState("")
    const [status, setStatus] = useState("")
    const handleSubmit =(e) => {
        e.preventDefault();
    axios.patch(`https://mysite-81rd.onrender.com/students/${id}`,{
        id:id,
    status:status
    })
    .then((response) => {
        console.log(response)
      }, (error) => {
        console.log(error);
      })
    }
    return(
        <div>
    <form className="complete-course-form" onSubmit={handleSubmit}>
      <input placeholder="student id" type="text" 
      value={id} 
      onChange={(e) => setId(e.target.value)}/>
       <input placeholder="status" type="text" 
      value={status} 
      onChange={(e) => setStatus(e.target.value)}/>
      
       <input type="submit" value="submit" className="btn-delete-inpt"/>
    </form>
        </div>
    )
}

export default CompleteCourse;