import { Component } from "react";
import "./Dashbord.css";
class Admindash extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="logo">Home</div>
          <ul>
            <li>
              <a href="/Login">Login</a>
            </li>
            {/* <li>
              <a href="/DashboardAdmin">Admin</a>
            </li>
            <li>
              <a href="/DashboardTeacher">Teacher</a>
            </li>
            <li>
              <a href="/DashboardStudent">Student</a>
            </li> */}
            <li>
              <a href="/RegisterWindow">Registration</a>
            </li>
            {/* <li>
              <a href="/VerifyWindow">Verify</a>
            </li> */}
            {/* <li>
              <a href="/result">View Result</a>
            </li> */}
            {/* <li>
              <a href="/logout">Log Out</a>
            </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}
export default Admindash;
