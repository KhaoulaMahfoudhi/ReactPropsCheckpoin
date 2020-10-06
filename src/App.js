import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import Welcome from "./profile/Welcome";
import Nav from "./profile/Nav";


const alertMyInput = (name) => alert(name);

function App() {
  
  return (
    
    <div className="App">
      <Nav />
      
        <Profile 
          fullName="khaoula Mahfoudhi" 
          bio="I have a master's degree in computer network."
          profession="student in GoMyCode"
        >
          <img className="image" src="./moi.png" alt="myimage" />
        </Profile>
     
      <div>
        <Welcome alertMyInput={alertMyInput} />
      </div>
    </div>
  );
  
}


export default App;
