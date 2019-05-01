import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../App.css";
import pdf from "../Assignment 2019.pdf";

class Courses extends Component{
    state={

        module:"",

        courses:[
            {
                moduleId:"frameworks001",
                moduleName: "Frameworks",
                moduleDescription: "In this module you will learn about Software Frameworks.",
                haveNotice:true,
                moduleNotices:[
                    {
                        noticeDate:"Wed May 01 2019",
                        noticeHeader:"Canceled Lectures.",
                        notice:"Lectures are cancelled on Thursday 2nd May 2019, due to Lab assignment on 3rd May.",
                    },
                    {
                        noticeDate:"Tue April 30 2019",
                        noticeHeader:"About second week assignment.",
                        notice:"Assignment for second week uploaded to the system, under, week 2. Assignment based on JavaScript.",
                    },
                ],
                moduleAssignmentAval:true,
                moduleAssignments:[
                    {
                        mAssignmentID:"",
                        mAssignmentName:"",
                        mAssignmentDescription:pdf,
                        mAssignmentDueDate:"Sat May 25 2019"
                    }
                ],
                moduleContent:[
                    {
                        weekID:"frame001",
                        week:"1st Week",
                        assignmentAval: false,
                        assignment: "",
                        weekContent: [
                            {
                                slideName: "first Lecture",
                                slide: pdf,
                            },
                            {
                                slideName: "first Lab Sheet",
                                slide: pdf,
                            },
                        ]
                    },
                    {
                        weekID:"frame002",
                        week:"2nd Week",
                        assignmentAval: true,
                        assignment:[
                            {
                                assignmentID: "w2a1",
                                assignmentName:"Java Script Assignment",
                                assignmentDescription:pdf,
                                assignmentDueDate:"Sat May 25 2019"
                            },
                        ],
                        weekContent: [
                            {
                                slideName:"second Lecture",
                                slide:"http://courseweb.sliit.lk/mod/resource/view.php?id=78330",
                            },
                            {
                                slideName:"second Lab Sheet",
                                slide:"http://courseweb.sliit.lk/mod/resource/view.php?id=78330",
                            },
                            {
                                slideName:"second Tutorial",
                                slide:"http://courseweb.sliit.lk/mod/resource/view.php?id=78330",
                            }
                        ],
                    },
                    {
                        weekID:"frame003",
                        week:"3rd Week",
                        assignmentAval: false,
                        assignment:"",
                        weekContent: [
                            {
                                slideName:"third",
                                slide:pdf,
                            }
                        ]
                    }

                ],
            },
            {
                moduleId:"architecture001",
                moduleName: "Architecture",
                moduleDescription: "In this module you will learn about Software Architecture.",
                haveNotice: true,
                moduleNotices:[
                    {
                        noticeDate:"Wed May 1 2019",
                        noticeHeader: "Assignment one notice.",
                        notice:"Assignment on design patterns should be contain at least 3 design patterns.",
                    },
                ],
                moduleContent:[
                    {
                        weekID:"arch001",
                        week:"1st Week",
                        assignmentAval: true,
                        assignment:[
                            {
                                assignmentID: "w2a1",
                                assignmentName:"Design Patterns Assignment",
                                assignmentDescription:pdf,
                                assignmentDueDate:"Fri May 10 2019"
                            },
                        ],
                        weekContent: [
                            {
                                slideName:"first",
                                slide:pdf,

                            }
                        ]
                    }
                ],
            },
            {
                moduleId:"softwareqm001",
                moduleName: "Software Quality Management",
                moduleDescription: "In this module you will learn about Software Quality Management.",
                haveNotice: false,
                moduleNotices:[],
                moduleContent:[
                    {
                        weekID:"sqm001",
                        week:"1st Week",
                        assignmentAval: false,
                        assignment:"",
                        weekContent: [
                            {
                                slideName:"first",
                                slide:pdf,
                            }
                        ]
                    }
                ],
            },
        ],
    }

    render() {

    return (
        <div className="col-sm ">
            <div>
                <p>
                    {this.state.courses.map((courses, i)=>
                        <Link key={i} to={{pathname:"/module", moduleProps:{courses}}}><li key={i}><i className="fas fa-book-open" style={{size:"9x"}}/> &nbsp;{courses.moduleName}</li></Link>
                    )}
                </p>

                {this.state.module}

            </div>
        </div>
    );

    }
}

export default Courses;