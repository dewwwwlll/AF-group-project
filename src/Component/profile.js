import React, {Component} from "react";
import ImageUploader from "./ImageUploader";
import pdf from "../Assignment 2019.pdf";
import DP from "../images/profile.jpeg";
import '../App.css'
import Courses from "./courseProfile";


class Profile extends Component
{

    state={
        person:[{

        }
        ],
        studentName:"Sachith Fernando",
        studentID:"abcd123456",
        studentFaculty:"Computing",
        studentPassword: "somethingpassword" ,
        studentPasswordRE: "somethingpassword" ,
        studentEmail: "bleh@email.com",
        studentDp: DP,
        registeredDate: "reg/istered/date",
        lastLoginDate: new Date(),
        grades: pdf,
        edit: false,
        showEdit: "none",
        studentDetails: "block",
        notMatch: "",
        tooShort:"",
        confirmPassword: false
    };

    render(){
    return (
        <div className="App">
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-4' style={{background:'#e0e0e2',padding:'25px'}}>
                        <div className="card text-white bg-secondary mb-3" style={{width: "20rem"}}>
                            <div className='card-header'>
                                <h3>Student Details</h3>
                            </div>
                            <img className="card-img-top" src={(this.state.studentDp)} alt="ProfileImage"/>
                            <div className="card-body "style={{ display: this.state.studentDetails}}>
                                <p className="card-text">Student Name : {this.state.studentName}</p>
                                <p className="card-text">Student ID   : {this.state.studentID}</p>
                                <p className="card-text">Faculty      : {this.state.studentFaculty}</p>
                            </div>
                            {/*<form>*/}
                            <div className="card-body " style={{ display: this.state.showEdit}}>
                                <p>Student Password : <input className={this.state.tooShort} type="password"  id="password" value={this.state.studentPasswordRE} onChange={this.passwordCheck.bind(this)}/></p>
                                <p>Confirm Password : <input className={this.state.notMatch} id="cPassword" type="password" onChange={this.confirmCheck.bind(this)} /> </p>
                                <p>Display Picture :</p>
                                < ImageUploader/>
                                <br/>
                                <button className="btn btn-success" onClick={this.saveEdits.bind(this)}>Save</button>
                            </div>
                            {/*</form>*/}
                                    <button onClick={this.onEditClick.bind(this)} className="btn btn-primary">
                                        <i className="fas fa-edit"/>
                                    </button>
                        </div>
                        </div>
                        <div className='col-sm-4' style={{background:'#e0e0e2',padding:'25px'}}>
                            <div>
                                <h3>Course Profile</h3>
                            </div>
                            <Courses/>
                        </div>
                        <div className='col-sm-4' style={{background:'#e0e0e2',padding:'25px'}}>
                            <div>
                                <div>
                                    <h3>Reports</h3>
                                </div>
                                <div>
                                    <p><a href={this.state.grades}>Grades</a></p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Login Activity</h3>
                                </div>
                                <div>
                                    <p>Registered date : {this.state.registeredDate}</p>
                                    <p>Last login : {this.state.lastLoginDate.toLocaleString()} </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
    }

        onEditClick(){
            if(this.state.showEdit==="none"){
            this.setState({showEdit:"block"})
            this.setState({details:"none"})
            }
            else{
                this.setState({showEdit:"none"})
                this.setState({details: "block"})
        }
        }

        async passwordCheck(e){
            await this.setState({studentPasswordRE : e.target.value})
            if(this.state.studentPasswordRE.length < 6){
                this.setState({tooShort:"alert-danger"})
            }
            else if(this.state.studentPasswordRE === null){
                this.setState({tooShort:"alert-danger"})
            }
            else{
                this.setState({tooShort:"alert-success"})
            }

        }
        confirmCheck(e){
            if(e.target.value===this.state.studentPasswordRE){
                this.setState({notMatch:"alert-success"})
                this.setState({confirmPassword:true})

            }
            else if(e.target.value!==this.state.studentPassword && this.state.studentPasswordRE.length===0){
                this.setState({notMatch:"alert-danger"})
            }
            else {
                this.setState({notMatch:"alert-danger"})
            }
        }
        saveEdits(e){
            e.preventDefault()  ;
            if(this.state.studentPasswordRE === this.state.studentPassword && this.state.confirmPassword === false){
                alert("Enter a new password")
            }
            else if(this.state.studentPasswordRE.length === 0){
                alert("Password Empty")
            }
            else if(this.state.studentPasswordRE.length < 6){
                alert("Password Too Short")
            }
            else if(this.state.studentPasswordRE!==this.state.studentPassword && this.state.studentPasswordRE.length===0){
                alert("Please Confirm Your Password")
            }
            else if(this.state.confirmPassword === false){
                alert("Passwords dont match")
            }
            else {
                alert("Good")
            }
        }

}

export default Profile;
