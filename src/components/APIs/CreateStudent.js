import React, {useState} from "react";
import axios from 'axios';
function CreateStudent(){
    const [studentname, setStudentName] = useState("")
    const [status, setStatus] = useState("")

    const handleSubmit =(e) => {
        e.preventDefault();
      
      axios.post('https://arcane-gorge-73424.herokuapp.com/students', {
      studentname:studentname,
      status:status,
    })
    .then((response) => {
      console.log(response)
    }, (error) => {
      console.log(error);
    })
      };
    return(
        <div>
    <form className="new-tip-form" onSubmit={handleSubmit}>
      <input placeholder="name" type="text" 
      value={studentname} 
      onChange={(e) => setStudentName(e.target.value)}/>
       <input placeholder="status" type="text" 
      value={status} 
      onChange={(e) => setStatus(e.target.value)}/>
      <input type="submit" value="add " className="btn-inpt"/>
    </form>
        </div>
    )
}

export default CreateStudent;