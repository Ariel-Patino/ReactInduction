import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import { isNil } from 'lodash';
import Suggestion from './SuggestionListContainer';

class SuggestionBoxContainer extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidUpdate() {
        if (!isNil(this.props.focusedSuggestion)) {
            this.scrollToSuggestion();
        }
    }

    scrollToSuggestion() {
        const { focusedSuggestion, list } = this;
        const listRect = list.getBoundingClientRect();
        const suggestionRect = focusedSuggestion.getBoundingClientRect();

        if (suggestionRect.bottom > listRect.bottom) {
            list.scrollTop = (
            focusedSuggestion.offsetTop +
            focusedSuggestion.clientHeight -
            list.clientHeight
            );
        } else if (suggestionRect.top < listRect.top) {
            list.scrollTop = focusedSuggestion.offsetTop;
        }
    }

    setFocusedSuggestion(ref) {
        this.focusedSuggestion = ref && ref.item;
    }

    handleMouseMove(event, index) {
        const { movementX, movementY } = event.nativeEvent;

        if (movementX || movementY) {
            this.props.onSuggestionHover(index);
        }
    }

    handleMouseLeave() {
        this.props.onSuggestionHover(null);
    }

    renderSuggestion(suggestion, index) {
    const { props } = this;
    const isFocused = props.focusedSuggestion === index;

    return (
        <Suggestion
        className={classNames({
            [props.styles.suggestion]: true,
            [props.styles.suggestionFocused]: isFocused
        })}
        index={index}
        key={suggestion}
        onClick={props.onSelection}
        onMouseMove={this.handleMouseMove}
        ref={isFocused && this.setFocusedSuggestion}
        searchTerm={props.searchTerm}
        suggestionRenderer={props.suggestionRenderer}
        />
    );
    }

    render() {


    return (
        <ul
        className={this.props.styles.suggestions}
        customRef={ref => this.list = ref}
        onMouseLeave={this.handleMouseLeave}        
        >
            {this.props.suggestions.map(this.renderSuggestion)}
        </ul>
    );
    }
}



export default SuggestionBoxContainer;
