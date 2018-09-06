import React, { Component } from "react";
import ReactDOM from "react-dom";
import Inputss from "../presentational/AutocompleteInput";

class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputContent: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
        console.log("this is the event change")
    }

    render() {
        const { inputContent } = this.state;
        return (          
            <Inputss
              id="inputContent"
               type="text"
               list="json-datalist"
               placeHolder="Search"
               handleChange={this.handleChange}
        />
      );
    }
}
export default SearchContainer;

const wrapper = document.getElementById("search-article-autocomplete");

console.log('wrapper', wrapper)
wrapper ? ReactDOM.render(<SearchContainer />, wrapper) : false;