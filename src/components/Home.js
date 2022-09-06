import React from "react";
import CourseDetails from "./CourseDetail";
import NavBar from "./NavBar";
import Footer from "./footer";

function Home(){
    const background_url = "https://codetoinvent.com/wp-content/uploads/2020/12/programming-courses-back.jpg"
    return(
        <div className="home-div">
            <header>
            <h1>Prodev Learning</h1>
            <NavBar/>
            <img src={background_url}/>
            </header>
            <Footer/>
        </div>
    )
}

export default Home;