import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <nav>
      <ul>
        <li>
    <NavLink to="/">Home</NavLink>
    </li>
    <li><NavLink to="/courses">Courses</NavLink>
    </li>
    <li><NavLink to="/instructors">Instructors</NavLink>
    </li>
    <li><NavLink to="/students">Students</NavLink>
    </li>
    </ul>
    </nav>
  </div>
  )
}

export default NavBar;