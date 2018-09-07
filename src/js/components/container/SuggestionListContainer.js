import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import List from "../presentational/List";

class SuggestionListContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleClick() {
    this.props.onClick(this.props.suggestion);
  }

  handleMouseMove(event) {
      this.props.onMouseMove(event, this.props.index);
  }

  render() {
    const { props } = this;
      return (
          <List
            className={props.className}
            customKey={props.suggestion}
            customRef={ref => this.item = ref}
            onClick={this.handleClick}
            onMouseMove={this.handleMouseMove}
            suggestionRenderer={props.suggestionRenderer(props.suggestion, props.searchTerm)}
        />
    );
  }
}

export default SuggestionListContainer;

