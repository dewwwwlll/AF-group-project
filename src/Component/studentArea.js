import React, {Component} from "react";

class StudentArea extends Component{

    state={
       news: [
           ""
       ]
    }

    render(){
    return (
        <div className="App">
            <h1>Student Area</h1>
            <div className="row">
                <div className="col-sm-3">
                    <h3>News</h3>
                    <p>kfjaksfkajjfvkalvfklu</p>
                </div>
            </div>
        </div>
    );
    }
}

export default StudentArea;