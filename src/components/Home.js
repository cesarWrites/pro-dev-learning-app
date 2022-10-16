import React, {useState} from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import './home.css';
import NewCourse from "./NewCourse";
import SignUp from "./pages/SignUp";
import Partners from "./Partners";
import Login from "./pages/Login";

function Home(user){
    let [show, setForm] = useState(false);
    let [signUp, setSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const background_url = "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGVhcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    function handleClick(){
        setForm(true);
      }
    function handleSignUpClick(){
        setSignUp(!signUp);
        setShowLogin(!showLogin);
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
                <div className="create-course">
                <button className="add-course-btn" onClick={handleClick}>Create a Course</button>
        {show ? <NewCourse /> : null}
        <button className="add-course-btn" onClick={handleSignUpClick}>Start Leaning</button>
        {signUp ? <SignUp /> : null}
        {showLogin ? <Login /> : null}
        </div>
            
            </div>

            <div className='bg-image'>
            <img className="home-img" src={background_url} alt=""/>
            </div>
            </div>
            <Partners/>
            <Footer/>
        </div>
    )
}

export default Home;