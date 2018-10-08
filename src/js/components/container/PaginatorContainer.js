import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';

class PaginatorContainer extends Component {

	constructor(props) {
		super(props);
		autoBind(this);
	}

	
	handlePageClick(data) {
		this.props.handlePageClick(data);	
	};

	render() {
		return (
			<div className='commentBox'>
			<ReactPaginate previousLabel={'previous'}
							nextLabel={'next'}
							breakLabel={<a href=''>...</a>}
							breakClassName={'break-me'}
							pageCount={this.props.totalPages}
							marginPagesDisplayed={2}
							pageRangeDisplayed={5}
							onPageChange={this.handlePageClick}
							containerClassName={'pagination'}
							subContainerClassName={'pages pagination'}
							activeClassName={'active'} />
			</div>
		);
	}
}

export default PaginatorContainer;
