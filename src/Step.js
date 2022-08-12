import React from "react";
import './Step.css';

function Step(props) {
    return (
        <div className="Step">
            <span>Step:
                <input onChange={props.stepMethod} type="number" /> 
            </span>
        </div>
    );
}

export default Step;