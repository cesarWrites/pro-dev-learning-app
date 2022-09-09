import React, {useState} from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import ';
import NewCourse from "./NewCourse";

function Home(){
    let [show, setForm] = useState(false);
    const background_url = "https://codetoinvent.com/wp-content/uploads/2020/12/programming-courses-back.jpg"

    function handleClick(){
        setForm(true);
      }
    return(
        <div className="home-div">
            <header>
            <h1 className="app-name">Prodev Learning</h1>
            <NavBar/>
            </header>
            <div className="head-sect">
            <div className ="home-det">
                <article>
                    <p>Welcome to the Prodev learning website.</p>
                    <p>Access courses across various programming disciplines from reputable instructors.</p>
                    <p>Create a new course in any interesting subject.</p>
                    <p>Add students to a specifc course and change their status as tehy continue with teh course.</p>
                </article>
                <button className="add-course-btn" onClick={handleClick}>Create a Course</button>
        {show ? <NewCourse /> : null}
            </div>
            <div className='bg-image'>
            <img src={background_url}/>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;