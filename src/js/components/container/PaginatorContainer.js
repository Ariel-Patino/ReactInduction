import React, { Component } from "react";
import ReactDOM from "react-dom";
import autoBind from "react-autobind";
import classNames from "classnames";
import Words from "../../../../dist/assets/files/words.json";
import Styles from "../../../../dist/styles/css/app.blocks.css";

class PaginatorContainer extends Component {

    constructor(props) {
        super(props);
        autoBind(this);
		this.state = {
			currentPosition: 0,
			pageCount: 50,
			pageLink: 'link',
			className: 'clasName'
		}
    }

    handleOnClick(itemSelected) {
        console.log(itemSelected);
    }

    render() {
        return (
            <div className="Styles">
                <Pagination currentPage={13}
                    pageCount={50}
                    pageLinkClassName="page-link"
                    currentLinkClassName="current-link"
                    onPageClick={this.handleOnClick}/>
            </div>
        );
    }
}

ReactDOM.render(<PaginatorContainer />, document.getElementById("article-list-pagination"));
