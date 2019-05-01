import React, {Component} from "react";
import "../App.css";
import Courses from "./courseProfile";

class Course extends Component{

    state={
        news: [
            ""
        ]
    }

    render(){
        return (
            <div>
                <h1>Courses</h1>
                <div className="row">
                    <div className="col-sm custom">
                            <Courses/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Course;