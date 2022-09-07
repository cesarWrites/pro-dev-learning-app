import React, {useState} from "react";
import CourseDetails from "./CourseDetail";
import NavBar from "./NavBar";
import Footer from "./footer";
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
            <h1>Prodev Learning</h1>
            <NavBar/>
            </header>
            <div>
                <article>
                    <p>Welcome to the Prodev learning website.</p>
                    <p>Access courses across various programming disciplines from reputable authors.</p>
                </article>
            </div>
            <div>
            <img src={background_url}/>
            </div>
            <button onClick={handleClick}>Create new tip</button>
        {show ? <NewCourse /> : null}
            <Footer/>
        </div>
    )
}

export default Home;