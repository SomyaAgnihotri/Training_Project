import { Component } from "react";
class Compo3 extends Component{
    constructor(){
        super()
        this.state = {
            "Profile" : " ",
            "Sheets" : " ",
            "Evaluation" : "",
            "Complaint" : " "
        }
    }
    render(){
        return(<div>
            <input type = "Submit" name="dashboard" value="Teacher Dashborad"></input> <br></br>
            <li>Profile</li>
            <li>Complaint</li>
        </div>)
    }
}
export default Compo3;
