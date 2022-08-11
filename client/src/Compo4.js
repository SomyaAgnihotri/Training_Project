import { Component } from "react";
class Compo4 extends Component{
    constructor(){
        super()
        this.state = {
            "Profile" : " ",
            "Result" : " "
        }
    }
    render(){
        return(<div>
            <input type = "Submit" name="dashboard" value="Student Dashborad"></input> <br></br>
            <li>Profile</li>
            <li>Result</li>
        </div>)
    }
}
export default Compo4;
