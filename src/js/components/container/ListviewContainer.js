import React, { Component } from "react";
import ReactDOM from "react-dom";
import autoBind from "react-autobind";
import classNames from 'classnames';
import Article from './ListContainer';
import Words from "../../../../dist/assets/files/words.json";
import Styles from "../../../../dist/styles/css/app.blocks.css";


class ListviewComponent extends Component {
    constructor(props) {
    super(props);    
        autoBind(this);
    }

    handleMouseMove(event, index) {

    }

    handleOnClickSuggestion(itemClicked) {
       
    }

    suggestionRenderer(suggestion, searchTerm) {
        return (
            <span>
                <strong> {suggestion} </strong>
            </span>
        );
    }

    renderSuggestion(suggestion, index) {
        const { props } = this;
        const isFocused = props.focusedSuggestion === index;

        return (
            <Article 
                className={classNames({
                    [Styles.suggestion]: true,
                    [Styles.suggestionFocused]: isFocused
                })}
                index={index}
                key={suggestion}
                onClick={this.handleOnClickSuggestion}
                onMouseMove={this.handleMouseMove}
                ref=""
                searchTerm=""
                suggestion={suggestion}
                suggestionRenderer={this.suggestionRenderer}
            />
        );
    }

    render() {
        return (
            <ul className={Styles.listview} >
                {Words.map(this.renderSuggestion)}
            </ul>
        );
    }
}

ReactDOM.render(<ListviewComponent />, document.getElementById("article-list-view"));
