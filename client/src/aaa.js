import { Component } from "react";
class aaa extends Component{
    constructor(){
        super()
        this.state = {
            "UserName" : " ",
            "Password" : " ",
            "Role" : "",
            "Face Verification" : " ",
            "Face Recognition" : " "
        }
    }
    render(){
        return(<div>
            <input type = "Submit" name="login" value="Login"></input> <br></br>
            <li>UserName</li>
            <li>Password</li>
            <li>Role</li>   
            <li>Face Verification</li>
            <input type = "Submit" name="login" value="Register"></input>
            
        </div>)
    }
}
export default aaa;
    