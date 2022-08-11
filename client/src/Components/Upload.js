import React, { Component } from 'react';

class Upload extends Component{
    render(){
        return(<div>
          <form className="upload-form">
            <label for="name" className="">{this.props.name}</label>
            <input id="name" type="text" placeholder="full name"></input>
            <label for="">{this.props.secondField}</label>
            <label for="">{this.props.thirdField}</label>
            <label for="">{this.props.fourthField}</label>
            <input type="text" placeholder=""></input>
            <input type="text" placeholder=""></input>
        </form>

        </div>)
    }
}
export default Upload;
