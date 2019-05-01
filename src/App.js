import React from 'react';
import NavBar from "./Component/NavBar/navbar";
import Footer from "./Component/footer"
import StudentArea from "./Component/studentArea"
import {BrowserRouter,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Course from "./Component/course";
import CourseModule from "./Component/courseModule";
import Profile from "./Component/profile";
import Home from "./Component/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Student Instructor Information System</h1>
      </header>
        <BrowserRouter>
            <div>

            < NavBar/>
            <Route path="/" component={Home} exact/>
            <Route path="/area" component={StudentArea}/>
            <Route path="/course" component={Course}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/module" component={CourseModule}/>


            </div>
        </BrowserRouter>
        < Footer/>
    </div>
  );
}

export default App;
