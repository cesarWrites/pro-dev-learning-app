import { useState} from "react";
import '../styles/auth.css';
import Courses from "../Course";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
 const handleClick = () => {
  <Courses/>
 }

  const handleSubmit =(e) => {
    e.preventDefault();
    fetch("https://arcane-gorge-73424.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      username,
      password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
    });
  }

  return (
    <form className = "login-form" onSubmit={handleSubmit}>
      <h3>Login With Username and password</h3>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
       <label htmlFor="password">Password: </label>
        <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleClick}>Login</button>
    </form>
  );
}

export default Login;
