import { Component } from "react";
import './RegistrationWindow.css';
class VerifyWindow extends Component{
    render(){
        return(
<div className="register">
            <h1 className="h1">FACE VERIFICATION</h1>
            <form>
            <br></br>
            <input type="file" id="myFile" name="filename"></input> <input type="button"value="Upload"></input>
            <br></br>
            <input type = "Text" placeholder="VERIFY"></input>  <br></br>
            <p>If Verified = Accept: will lead to dashboard<br></br>
            If Verified = Reject: will lead to login               
            </p>
            <button type="submit" class="button">Submit</button> <br></br>
            </form>
            </div>
            ); 
        }
    }
export default VerifyWindow;