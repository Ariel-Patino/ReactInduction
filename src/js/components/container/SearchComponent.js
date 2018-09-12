import React, { Component } from "react";
import ReactDOM from "react-dom";
import autoBind from "react-autobind";
import SearchBar from "./SearchBar";
import appStyle from "../../../styles/css/appStyles.css"
import words from "../../../assets/files/words.json";

class SearchComponent extends Component {
  constructor(props) {
    super(props);    

    this.state = {
        suggestions: []
      };

      this.appStyles = null;
      autoBind(this);
  }

  handleClear() {
    this.setState({
      suggestions: []
    });
  }

  handleChange(input) {
    this.setState({
      suggestions: words.filter(word => word.startsWith(input))
    });
  }

  handleSelection(value) {
    if (value) {
      console.info(`Selected "${value}"`);
    }
  }

  handleSearch(value) {
    if (value) {
      console.info(`Searching "${value}"`);
    }
  }

  suggestionRenderer(suggestion, searchTerm) {
    return (
      <span>
        <span>{searchTerm}</span>
        <strong>{suggestion.substr(searchTerm.length)}</strong>
      </span>
      );
     
  }

    render() {

    return (
      <SearchBar
        autoFocus
        renderClearButton
        renderSearchButton
        placeholder="Select an attribute"
        onChange={this.handleChange}
        onClear={this.handleClear}
        onSelection={this.handleSelection}
        onSearch={this.handleSearch}
        suggestions={this.state.suggestions}
        suggestionRenderer={this.suggestionRenderer}
        styles={appStyle}
      />
    );
  }
}

ReactDOM.render(<SearchComponent />, document.getElementById("search-article-autocomplete"));
