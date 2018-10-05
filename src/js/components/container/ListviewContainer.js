import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import Article from './ListContainer';
import PaginatorContainer from './PaginatorContainer';
import Words from '../../../../dist/assets/files/words.json';
import Styles from '../../../../dist/styles/css/app.blocks.css';


class ListviewComponent extends Component {
    constructor(props) {
    super(props);    
		this.state = {
			pageSize: 15,
			articles: []
		};
        autoBind(this);
    }

	
	componentDidMount() {
        fetch('http://localhost:59666/findArticlePage/null/' + this.state.pageSize)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('result', result);
					this.setState({
						pageSize: this.state.pageSize,
						articles: result
						}
					);
                },
                (error) => {
                    console.log('fatal Error', error);
                }
			)
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

    renderArticle(article, index) {		
		const suggestion = article.name;
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
                ref=''
                searchTerm=''
                suggestion={suggestion}
                suggestionRenderer={this.suggestionRenderer}
            />
        );
    }

    render() {
        return (
			<div>
				<ul className={Styles.listview} >
					{this.state.articles.map(this.renderArticle)}
				</ul>
				<PaginatorContainer perPage= {this.state.pageSize} />
			</div>
        );
    }
}

ReactDOM.render(<ListviewComponent />, document.getElementById('article-list-view'));
