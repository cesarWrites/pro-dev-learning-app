import React from "react";
import Partners from "./Partners";

function Landing(){
const [user, setUser] = useState(null);

useEffect(() => {
  fetch("https://arcane-gorge-73424.herokuapp.com/me").then((response) => {
    if (response.ok) {
      response.json().then((user) => setUser(user));
    }
  });
}, []);

function handleLogin(user) {
  setUser(user);
}

function handleLogout() {
  setUser(null);
}

return(
    <div>
        <Partners/>
    </div>
)
}
export default Landing;