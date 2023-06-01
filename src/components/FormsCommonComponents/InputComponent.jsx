import React from "react";

function InputComponent(props) {
  return (
    <div>
        <div className="attribute-container">
        <label htmlFor={props.name}>{props.displayName}</label>
        <input
            id={props.name}
            type={props.type}
            name={props.name}
            required
            className="attribute-input"
            value={props.value}
            onChange={props.onChangeEvent}
        />
        
        </div>
        {props.error && <p className="error-message">{props.error}</p>}
    </div>
  );
}

export default InputComponent;
