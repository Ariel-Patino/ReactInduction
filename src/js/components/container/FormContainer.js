import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      inputContent: ""
    };
	this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  
  render() {
	const { inputContent } = this.state;
	return (
      <form id="article-form">
        <Input
          text="Testing Input"
          label="input label"
          type="text"
          id="inputContent"
          value={inputContent}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");

console.log('wrapper', wrapper)
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;