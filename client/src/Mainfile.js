import React, {Component} from "react";
// import Navdash from './Navdash';
import Login from './Login';
import Upload from './Components/Upload';
// import DashboardAdmin from "./DashboardAdmin";
// import DashboardTeacher from "./DashboardTeacher";
// import DashboardStudent from "./DashboardStudent";
import StudentUpload from './StudentUpload';
import StudentView from './StudentView'
import TeacherView from './TeacherView'
import TeacherUpload from './TeacherUpload'
import RegisterWindow from './RegisterWindow';
import VerifyWindow from './VerifyWindow';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admindash from "./Admindash"; 
class Mainfile extends Component{
    render(){
        return(
            <BrowserRouter>
            <Admindash/>
            <Routes>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/RegisterWindow" element={<RegisterWindow/>}></Route>
                <Route path="/VerifyWindow" element={<VerifyWindow/>}></Route>
                <Route path="/student/view" element={<StudentView />}></Route>
                <Route path="/student/upload" element={<StudentUpload />}></Route>
                <Route path="/teacher/upload" element={<TeacherUpload />}></Route>
                <Route path="/teacher/view" element={<TeacherView />}></Route>
            </Routes>
            </BrowserRouter>    

        );
    }
}
export default Mainfile;