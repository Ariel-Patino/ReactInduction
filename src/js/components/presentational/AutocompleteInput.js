import React from "react";
import PropTypes from "prop-types";
const AutocompleteInput = ({ id, type, list, placeHolder, handleChange}) => (
    <div className="form-group">
        <input
            id={id}
            type={type}
            list={list}
            placeholder={placeHolder}
            className="form-control"
            onChange={handleChange}
        >
            
        </input>
        <datalist id={list}> </datalist>
    </div>
);
AutocompleteInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired, 
    list: PropTypes.string.isRequired,    
    placeHolder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};
export default AutocompleteInput;

