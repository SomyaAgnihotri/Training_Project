import { Component } from "react";
class Navdash extends Component{
    render(){
        return(<div> 
            <a href="/Login"> Home</a>
            <a href="/DashboardAdmin"> Admin</a>
            <a href="/DashboardTeacher"> Teacher </a>
            <a href = "/DashboardStudent">Student</a>
            <a href = "/RegisterWindow">Registration</a>
            <a href= "/VerifyWindow">Verify</a>
            </div>
            );
    }
}
export default Navdash;