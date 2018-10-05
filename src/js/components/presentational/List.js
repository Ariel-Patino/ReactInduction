import React from 'react';
import PropTypes from 'prop-types';
const List = ({ className, customKey, customRef, onClick, onMouseMove, suggestionRenderer}) => (
    <li
        className={className}
        key={customKey}
        ref={customRef}
        onClick={onClick}
        onMouseMove={onMouseMove}
    >
        {suggestionRenderer}
    </li>
);

List.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired   
};

export default List;
