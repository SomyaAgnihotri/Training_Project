import { Component } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';

class DashboardAdmin extends Component{
    render(){
        return(<div className="flexbox-container">
            <h1>ADMIN DASHBOARD</h1>
            <div className="row">
                <div className="column">
                    <h3 className="box-title">Student Information</h3>
                    <NavLink className="links" to="/student/upload">
                        <button className="upload-button">Upload</button>
                    </NavLink>
                    <NavLink className="links" to="/student/view">
                        <button className="view-button">View</button>
                    </NavLink>
                </div>
                <div className="column">
                    <h3 className="box-title">Teacher Information</h3>
                    <NavLink className="links" to="/teacher/upload">
                        <button className="upload-button">Upload</button>
                    </NavLink>
                    <NavLink className="links" to="/teacher/view">
                        <button className="view-button">View</button>
                    </NavLink>
                </div>
            </div>
            {/* <div className="dashboard-left">
            <button type="Submit" class="btn">Home Page</button>
            
            <button className="upload-button"> Upload</button>
            <button> View </button>
            <button type="Submit" class="btn">Teacher</button>
            <button className="upload-button"> Upload</button>
            <button> View </button>
            <button type="Submit" class="btn">Student Information</button>
            <button className="upload-button"> Upload</button>
            <button> View </button>
            <button type="Submit" class="btn">Upload OMR</button>
            <button className="upload-button"> Upload</button>
            <li> View </li><br></br>
            </div>

            <div className="dashboard-right"> 
              <h1>Student Information</h1>
              <ul>
                {
                    this.state.students.map(student =>
                        <li key={student.id}>{student.name}</li>
                        )
                }
              </ul>
            </div> */}
            
            {/* <div className="D1"> 1
            <div className="D2"> 2
            <div className="D3"> 3</div>
            <div className="D4"> 4</div>
            <div className="D5"> 5</div></div>
            </div> */}
            </div>          
            );
    }
}
export default DashboardAdmin;