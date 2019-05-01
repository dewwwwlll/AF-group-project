import React, {Component} from "react";
import FileUploader from "./FileUploader";


class CourseModule extends Component {

    constructor(props){
        super(props);
        this.state={ props : props }
    }

    remainingTimeCalculator(dD, e){
        const due = new Date(dD);
        const nd = new Date();
        const diffTime = Math.abs(due.getTime() - nd.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays.toString();
    }

    render() {
        return (
            <div className="container-fluid courseModule">
                <div className="row">
                    <div className="col-sm card">
                        <h3 className="badge-danger">{Object.values(this.state.props.location.moduleProps.courses.moduleName.toString())}</h3>
                        <h4 className="text-dark">{Object.values(this.state.props.location.moduleProps.courses.moduleDescription.toString())}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                    {this.state.props.location.moduleProps.courses.haveNotice=== true ?
                        Object.values(this.state.props.location.moduleProps.courses.moduleNotices).map((notices, nk) =>
                            <div className="card">
                            <h4 className="card-header alert-warning">{notices.noticeHeader}</h4>
                            <h6 className="card-text">{notices.notice.toString()}</h6>
                            <h6><small className="badge-dark">{notices.noticeDate}</small></h6>
                            </div>
                        ):<h3 className="badge-info">No Notices.</h3>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <div className="customSlides">
                            {Object.values(this.state.props.location.moduleProps.courses.moduleContent).map((each, i) =>

                                <div key={i} className="card">
                                    <p className="card-header" key={i}>{each.week}</p>
                                    {each.weekContent.map((weekC, k) =>
                                        <a className="card-text" href={weekC.slide} target="_blank" rel="noopener noreferrer" key={k}><i className="fas fa-sticky-note" key={i}/>&nbsp;{weekC.slideName}</a>
                                    )}
                                    {each.assignmentAval === true ? each.assignment.map((assMap, ak) =>
                                            <div className="card">
                                                <h3 className="card-header bg-dark text-white" key={ak}>{assMap.assignmentName}</h3>
                                                <a className="card-text" href={assMap.assignmentDescription} key={ak} style={{color: "red"}}><i className="fas fa-file" key={ak}/>&nbsp;Instructions</a>
                                                <div className="col-sm-3">
                                                    <h5 className="" key={ak}><small className="badge-success">{this.remainingTimeCalculator(assMap.assignmentDueDate)} Days Remaining.</small> <br/></h5>
                                                    <p className="card-text"><i className="fas fa-arrow-down" /> &nbsp;Submit Below </p>
                                                    < FileUploader/>
                                                <h6><small className="text-danger">Selected or Dropped Files will automatically uploaded.</small></h6>
                                                    <h6><small className="badge-danger"> Due Date : {assMap.assignmentDueDate}</small></h6>
                                                </div>
                                            </div>
                                    )
                                        : console.log("no assignments")}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    );
}
}

export default CourseModule;

