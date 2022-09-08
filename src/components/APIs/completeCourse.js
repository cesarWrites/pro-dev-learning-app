import React, { useState } from "react";
import axios from 'axios';
function completeCourse(){
    axios.patch('http://localhost:9292/students/id',{
    id:id ,   
    status:status
    })
    return(
        <div>

        </div>
    )
}

export default completeCourse;