import React from "react";
import PropTypes from "prop-types";
import Pagination from "pagination-component";
const Paginator = ({ className, customKey, customRef, onClick, onMouseMove, suggestionRenderer }) => (
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

Paginator.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired
};

export default Paginator;