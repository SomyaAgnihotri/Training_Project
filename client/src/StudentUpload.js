import axios from 'axios';
import React, { Component } from 'react'
import './Components/Upload.css';

class StudentUpload extends Component{
    constructor()
    {
        super()
        this.state={
            'id': '',
            'name':'',
            'semester':'',
            'branch': '',
            'admission_no': ''
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

        axios.post('http://localhost:8080/api/student/upload', { 
            id: this.state.id,
            name: this.state.name,
            semester: this.state.semester,
            branch: this.state.branch,
            admission_no: this.state.admission_no
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
            <label className="upload-form-label" for="semester">Enter Semester*</label>
            <input name="semester" className="upload-form-input" id="semester" value={this.state.department} type="text" onChange={this.handleChangeFields} placeholder="Enter department" required/>
            <label className="upload-form-label" for="branch">Enter Branch*</label>
            <input name="branch" className="upload-form-input" id="branch" value={this.state.department} type="text" onChange={this.handleChangeFields} placeholder="Enter department" required/>
            <label className="upload-form-label" for="admission_no">Enter admission no*</label>
            <input name="admission_no" className="upload-form-input" id="admission_no" value={this.state.department} type="text" onChange={this.handleChangeFields} placeholder="Enter department" required/>
            
            <button onClick={this.submitReview} className="submit-button" type="submit">Submit</button>
          </form>
        </div>
        )
    }
}
export default StudentUpload;