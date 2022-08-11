import { Component } from "react";
class DashboardStudent extends Component{
    render(){
        return(
        <div className="flexbox-student">
            <h1>STUDENT DASHBOARD</h1>
            <div className="left-side"> 
                <button type="Submit" >Profile</button><br></br>
                <button type="Submit" >Results</button><br></br>
                <button type="Submit" >Rechecking Section</button><br></br>
                {/* class="Profile"
                class="Results"
                class="Rechecking" */}
            </div>

             <div class="controls">
			<input type="text" name="Name" placeholder="Username" class="form-control" /> <br></br>
			<input type="text" name="Roll No." placeholder="Roll No." class="form-control" /><br></br>
			<input type="text" name="Section" placeholder="Section" class="form-control" /><br></br>
			<input type="email" name="Email" placeholder="Email ID" class="form-control" /><br></br>
			<input type="text" name="Contact" placeholder="Contact Details" class="form-control" /><br></br>

			<button type="button" className="button1">Edit</button>  <button type="submit" className="button1">Save</button>
                </div >     
            </div>);
    }
}
export default DashboardStudent;