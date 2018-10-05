import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';


class PaginatorContainer extends Component {

	constructor(props) {
		super(props);
		console.log(props, 'propos');

		this.state = {
			data: [],
			offset: 0
		}
	}

	loadCommentsFromServer() {
		$.ajax({
			url      : 'http://localhost:59666/findArticlePage/null/10',
			dataType : 'json',
			type     : 'GET',
			success: data => {
				console.log(data, 'data');
				//this.setState({data: data.comments, pageCount: Math.ceil(data.meta.total_count / data.meta.limit)});
			},
			error: (xhr, status, err) => {
				console.error('xhr',xhr, 'status',status, 'error',err.toString());
				//console.error(this.props.url, status, err.toString());
			}
		});
	}

	componentDidMount() {
		this.loadCommentsFromServer();
	}

	handlePageClick(data) {
		console.log(this.props, 'oops');
		if (this.props) {
			let selected = data.selected;
			let offset = Math.ceil(selected * this.props.perPage);

			this.setState({offset: offset}, () => {
				this.loadCommentsFromServer();
			});
		}
		console.log(data, 'datita');
	};

	render() {
		return (
			<div className='commentBox'>
			<ReactPaginate previousLabel={'previous'}
							nextLabel={'next'}
							breakLabel={<a href=''>...</a>}
							breakClassName={'break-me'}
							pageCount={this.state.pageCount}
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
