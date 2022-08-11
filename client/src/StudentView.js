import React, { Component } from 'react'
import axios from 'axios';
import './Components/View.css'
import { NavLink } from 'react-router-dom';

class StudentView extends Component{
    state = {
        results: []
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/student/get")
        .then((res) => {
            const results = res.data;
            console.log(results);
            this.setState({ results });
        });
    }
    render(){
        return(
            <div className="section">
                <div>
                <div className="view-table">
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Semester</th>
                    <th>Branch</th>
                    <th>Admission_no</th>
                </tr>
                {this.state.results.map(result => 
                    <tr key={result.id}>
                        <td>{result.id}</td>
                        <td>{result.name}</td>
                        <td>{result.semester}</td>
                        <td>{result.branch}</td>
                        <td>{result.adminssion_no}</td>
                    </tr>
                )}
            </tbody>
            </div>
            
            <NavLink to="/student/upload">
                    <button className="add-button">Add</button>
                </NavLink>
                </div>
                
            </div>
        );
    }
}

export default StudentView;