import axios from 'axios';
import React, { Component } from 'react'
import './Components/Upload.css';

class TeacherUpload extends Component{
    constructor()
    {
        super()
        this.state={
            'id': '',
            'name':'',
            'department':''
        }
        this.handleChangeFields=this.handleChangeFields.bind(this)
    }
    handleChangeFields=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        })
        console.log(this.state,"formFilled")
    }
    submitReview=(event) =>{
        event.preventDefault();

        axios.post('http://localhost:8080/api/teacher/upload', { 
            id: this.state.id,
            name: this.state.name,
            department: this.state.department
         })
        .then(res => {
            console.log(res);
            console.log(res.data);
            alert('insert success')
        })
    }

    render(){
        return(
        <div className="outer-section">
          <form className="upload-form">
            <label for="name" className="upload-form-label">Enter ID*</label>
            <input name="id" className="upload-form-input" id="name" type="text" onChange={this.handleChangeFields} placeholder="Enter ID" value={this.state.id} required/>
            <label for="name" className="upload-form-label">Enter name*</label>
            <input name="name" className="upload-form-input" id="name" value={this.state.name} type="text" onChange={this.handleChangeFields} placeholder="Enter full name" required/>
            <label className="upload-form-label" for="department">Enter Department*</label>
            <input name="department" className="upload-form-input" id="department" value={this.state.department} type="text" onChange={this.handleChangeFields} placeholder="Enter department" required/>
            <button onClick={this.submitReview} className="submit-button" type="submit">Submit</button>
          </form>
        </div>
        )
    }
}
export default TeacherUpload;