import React, { Component } from "react";
import ReactDOM from "react-dom";
import autoBind from "react-autobind";
import classNames from "classnames";
import Pagination from "pagination-component";
import Styles from "../../../../dist/styles/css/app.blocks.css";

class PaginatorContainer extends Component {

    constructor(props) {
        super(props);
        autoBind(this);
    }

    handleOnClick(itemSelected) {
        console.log(itemSelected);
    }

    render() {
        return (
            <div className="App">
                <Pagination currentPage={13}
                    pageCount={50}
                    pageLinkClassName="page-link"
                    currentLinkClassName="current-link"
                    onPageClick={this.handleOnClick}/>
            </div>
        );
    }
}

export default App;
