import { Component } from "react";

class RegisterWindow extends Component{
    constructor()
    {
        super()
        this.state={
            'role':'Admin',
            'username':'',
            'password':'',
            'confirm-password': '',
            'choose-file':'',
            'isverify':false
        }
        this.handleChangeFields=this.handleChangeFields.bind(this)
    }
    handleSubmit=()=>{  
        window.history.replaceState(null, "verify-window", "/VerifyWindow");
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
            <div className="register">
            <h1 className="h1">REGISTRATION WINDOW</h1>
            <form onSubmit={this.handleSubmit}>
            <br></br>
            <div className="center">
            <label for="Role" placeholder="Role"> Role </label>
            <select name="role" value={this.state.role} onChange={this.handleChangeFields} id="Role">
            <option value="Admin">Admin</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            </select> <br></br><br></br><br></br>
            <input type = "email" name="username" value={this.state.username} onChange={this.handleChangeFields} placeholder="email" required></input>  <br></br>
            <input type = "password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChangeFields} required></input><br></br>
            {/* <input type = "password" name="confirm-password" value={this.state.confirm-password} placeholder="Confirm-Password" onChange={this.handleChangeFields} required></input><br></br> */}
            </div>
            <div className="button2">
            <input className="button3" onChange={this.handleChangeFields} type="file" id="myFile" name="filename"></input> <br></br>
            <input type="button"value="Retake"></input>     <input type="button"value="Upload"></input>
            </div>
            <br></br> <br></br>
            <button type="submit" class="button4">Verify</button>
            </form>
            </div>
        ); 
    }
}
export default RegisterWindow;