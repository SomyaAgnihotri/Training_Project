import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Components/View.css'

class TeacherView extends Component{
    state = {
        results: []
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/teacher/get")
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
                    <th>Department</th>
                </tr>
                {this.state.results.map(result => 
                    <tr key={result.id}>
                        <td>{result.id}</td>
                        <td>{result.name}</td>
                        <td>{result.department}</td>
                    </tr>
                )}
            </tbody>
            </div>
            
            <NavLink to="/teacher/upload">
                    <button className="add-button">Add</button>
                </NavLink>
                </div>
                
            </div>
        );
    }
}

export default TeacherView;