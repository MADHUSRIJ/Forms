import React from "react";

function ButtonComponent(props){

    return(
        <button className="button" typeof="submit" onClick={props.onClickEvent}>
            Submit
        </button>
    );
}

export default ButtonComponent;