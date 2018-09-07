import React from "react";
import PropTypes from "prop-types";
const Suggestions = ({ className, customRef, MouseLeave }) => (
    <ul
        className={className}
        ref={customRef}
        onMouseLeave={MouseLeave}
    >
        
    </ul>
);

Suggestions.defaultProps = {
    styles: {
        suggestions: 'react-search-bar__suggestions',
        suggestion: 'react-search-bar__suggestion',
        focusedSuggestion: 'react-search-bar__suggestion--focused'
    }
};


export default Suggestions;
