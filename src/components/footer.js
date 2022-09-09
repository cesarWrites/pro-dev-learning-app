import React from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa';

function Footer(){
    return(
        <div className="foot-div">
            <footer>
  <p>designed by: Sarah Mukuti <br/>
  <a href="sarahm@gmail.com">sarahmukuti@gmail.com</a></p>
  <p><span>&#169;</span>2022</p>
        <FaHeart />
        <FaFacebook />
</footer>
        </div>
    )

}
export default Footer;