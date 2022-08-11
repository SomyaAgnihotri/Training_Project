import React, { Component } from "react";
class DashboardTeacher extends Component{
    render(){
        return(<div className="flexbox-teacher">
            <h1>TEACHER DASHBOARD</h1>
            <div className="dash-left">
            <button type="Submit" class="btn">Home Page</button><br></br>
            <li> Upload</li>
            <li> View </li><br></br>
            <button type="Submit" class="btn">Complain Section</button><br></br>
            <li> Upload</li>
            <li> View </li><br></br>
            </div>
            <div className="dash-right"> Welcome </div>
            <div class="vl"></div> <br></br>          
            </div>);
    }
}
export default DashboardTeacher;