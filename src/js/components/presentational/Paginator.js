import React from 'react';
import PropTypes from 'prop-types';
const Paginator = ({ className, customKey, customRef, onClick, onMouseMove, suggestionRenderer}) => (
	<ul>
		<li
			className={className}
			key={customKey}
			ref={customRef}
			onClick={onClick}
			onMouseMove={onMouseMove}
		>
			{suggestionRenderer}
		</li>
	</ul>
);

Paginator.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired   
};

export default List;
