import React from "react";

function Home(){
    return(
        <div className="home-div">
            <header>
            <h1>Prodev Learning</h1>
            </header>
            {courses.map((course) => (
                 <CourseSummary course={course} key={course.id} />
            ))}
        </div>
    )
}

export default Home;