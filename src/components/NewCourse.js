import React, {useState} from "react";
import axios from 'axios';
function NewCourse(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")

    const handleSubmit =(e) => {
        e.preventDefault();
      
      axios.post('http://localhost:9292/courses', {
      title:title,
      description:description,
      rating: rating
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
      <input placeholder="UserName" type="text" 
      value={title} 
      onChange={(e) => setTitle(e.target.value)}/>
      <textarea placeholder="Write your description..." rows={10} type="text" value={description} 
      onChange={(e) => setDescription(e.target.value)}/>
       <input placeholder="UserName" type="text" 
      value={rating} 
      onChange={(e) => setRating(e.target.value)}/>
      <input type="submit" value="Share the tech tip" className="btn-inpt"/>
    </form>
        </div>
    )
}

export default NewCourse;