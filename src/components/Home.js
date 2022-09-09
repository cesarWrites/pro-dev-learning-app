import React, {useState} from "react";
import CourseDetails from "./CourseDetail";
import NavBar from "./NavBar";
import Footer from "./footer";
import './home.css';
import NewCourse from "./NewCourse";

function Home(){
    let [show, setForm] = useState(false);
    const background_url = "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGVhcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

    function handleClick(){
        setForm(true);
      }
    return(
        <div className="home-div">
            <header>
            <h1 className="app-name">Prodev <span>Learning</span></h1>
            <NavBar/>
            </header>
            <div className="head-sect">
            <div className ="home-det">
                <article>
                    <p>Welcome to the Prodev learning website.</p>
                    <p>Access courses across various programming disciplines from reputable instructors.</p>
                    <p>Create a new course in any interesting subject.</p>
                    <p>Add students to a specifc course and change their status as they continue with the course.</p>
                </article>
                <button className="add-course-btn" onClick={handleClick}>Create a Course</button>
        {show ? <NewCourse /> : null}
            </div>
            <div className='bg-image'>
            <img className="home-img" src={background_url}/>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;