import { Component } from "react";
import DashboardAdmin from './DashboardAdmin';
import DashboradTeacher from './DashboardTeacher';
import DashboardStudent from './DashboardStudent';
class Login extends Component{
    constructor()
    {
        super()
        this.state={
            'username':'',
            'password':'',
            'role':'Admin',
            'isloggedin':false
        }
        this.handleChangeFields=this.handleChangeFields.bind(this)
    }
    handleDemo=()=>{
        if(this.state.role==='Admin'){
            this.setState({isloggedin:true})
        }
        else if(this.state.role==='Teacher')
        {
            this.setState({isloggedin:true})
        }
        else if(this.state.role==='Student')
        {
            this.setState({isloggedin:true})
        }
        else {
            alert("not logged in")
        }
    }
    handleChangeFields=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        })
        console.log(this.state,"formFilled")
    }
    render(){
        return(
            
        this.state.isloggedin?(this.state.role==='Teacher'?<DashboradTeacher/>: 
         this.state.role==='Student'?<DashboardStudent />:<DashboardAdmin/>):
        <div className="Main">
           <div className="login-box">
            <form onSubmit={this.handleDemo}>
            <h2>Login</h2>
                <div className = "user-box">
                <input type="email" name="username" value={this.state.username} onChange={this.handleChangeFields} placeholder="Username" class="form-control" required /> <br></br>
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChangeFields} class="form-control" required /> <br></br>
                <select name="role" value={this.state.role} onChange={this.handleChangeFields} id="Role">
                <option value="Admin">Admin</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                </select> 
                </div>
                <button className="different-button" type="submit">Login</button>
            </form>
            </div>      
            
        </div>
        );
    }
}
export default Login;