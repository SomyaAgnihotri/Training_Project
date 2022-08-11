// import { findByAltText } from "@testing-library/react";
import { Component } from "react";
class Fb extends Component{
    render(){
        return(<div className="Header">

            <div className="Upper-left">
            <h1>facebook</h1>
            </div>

            <div className="Upper-right">
            <form>
            <input type = "Text" placeholder="Email or Phone"></input>  <br></br>
            <input type="Checkbox" ></input> 
            <label> Keep me logged in</label><br></br> <br></br>
            <input type = "Password" placeholder="Password"></input><br></br>
            <label> Forgot your password? </label> <br></br>
            <input type = "Submit" name="login" value="LogIn"></input>
            </form>
            </div>

            <div className="Info">
            <h4>Sign Up </h4>
            <p>It's free and always will be </p>
            <hr></hr>
            {/* <label>First Name </label> */}
            <input type = "Text" placeholder="First Name"></input>  <br></br> 
            {/* <label>Last Name </label> */}
            <input type = "Text" placeholder="Last Name"></input>  <br></br>
            {/* <label>Your Email </label> */}
            <input type = "email" placeholder="Your Email"></input>  <br></br>
            {/* <label>Re-Enter Email </label> */}
            <input type = "email" placeholder="Re-Enter Email"></input>  <br></br>
            {/* <label>New Password </label> */}
            <input type = "password" placeholder="New Password"></input>  <br></br>
            <label for="Gender">I am: </label>
            <select name="Genders" id="Gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
            <p> Birthday 
            <select><option>Day</option></select>
            <select><option>Month</option></select>
            <select><option>Year</option></select> <br></br>
            Why do I need to provide my birthday?
            </p>
            <input type = "Submit" name="signup" value="Sign Up"></input>
            <hr></hr>
            <p>Create a page for celebrity, brand or business</p><br></br>
            </div>

            <div className="Side">
                <h1>Facebook helps you connect and share with the people in your life</h1>
            </div>            
        </div>
        );
    }
}
export default Fb; 
