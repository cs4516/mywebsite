import { useState } from 'react';
import './App.css';
import backgroud_img from './assets/Ecuadorpic.jpg';

function App() {
  return (
    <>
      <nav>
        <div>
          <ul id="navbar">
            <li><a href="#/Home"><Home/></a></li>
            <li><a href="#/Experience"><Experience/></a></li>
            <li><a href="#/VolunteerWork"><Volunteer/></a></li>
            <li><a href="#/Projects"><Projects/></a></li>
          </ul>
        </div>
      </nav> 

      <img src={backgroud_img} alt="ecuador" className = "image1" />

      <h1 id="Heading">
        Hello! my name is Cristian
      </h1>
    </>
  );
}

export default App;