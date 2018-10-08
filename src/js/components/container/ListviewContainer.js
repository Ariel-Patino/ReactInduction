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
			totalPages: 0,
			articles: []
		};
        autoBind(this);
    }

	componentDidMount() {
		fetch('http://localhost:59666/totalPages/' + this.state.pageSize)
		.then(res => res.json())
		.then(
            (totalPages) => {
						fetch('http://localhost:59666/findArticlePage/null/' + this.state.pageSize)
						.then(res => res.json())
						.then(
							(articles) => {
								this.setState({
									pageSize: this.state.pageSize,
									articles: articles,
									totalPages: totalPages
									}
								);
							},
							(error) => {
								console.log('fatal Error', error);
							}
						)          					
            },
            (error) => {
                console.log('fatal Error', error);
            }			
		);
    }

	loadArticlesFromServerAccordingPage(page) {
	console.log(page.selected);
	console.log(`http://localhost:59666/getPage/${page.selected}/${this.state.pageSize}/`);
	console.log(this.state.pageSize,'this.state.pageSize');

		fetch(`http://localhost:59666/getPage/${page.selected}/${this.state.pageSize}/`)
		.then(res => res.json())
		.then(
			(page) => {
				this.setState({
									pageSize: this.state.pageSize,
									articles: page,
									totalPages: this.state.totalPages
									}
								);
			}
		);
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
				<PaginatorContainer 
					perPage = { this.state.pageSize } 
					totalPages = { this.state.totalPages }
					handlePageClick = { this.loadArticlesFromServerAccordingPage }
					/>
			</div>
        );
    }
}

ReactDOM.render(<ListviewComponent />, document.getElementById('article-list-view'));
