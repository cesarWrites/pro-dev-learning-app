import React, { useState } from "react";
import axios from 'axios';

function DeleteStudent(){

    const [id, setId] = useState("")
const handleSubmit =(e) => {
    e.preventDefault();
  
  axios.delete('http://localhost:9292/students/id', {
  id:id
})
.then((response) => {
  console.log(response)
}, (error) => {
  console.log(error);
})
  };

    return(
        <div>
        <form className="student-details-form" onSubmit={handleSubmit}>
      <input placeholder="student id" type="text" 
      value={id} 
      onChange={(e) => setId(e.target.value)}/>
       <input type="submit" value="remove student" className="btn-inpt"/>
    </form>
        </div>
    )
}

export default DeleteStudent;