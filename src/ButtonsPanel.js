import React from "react";
import  './ButtonsPanel.css';

function ButtonsPanel(props) {
  
  return(
   <div className="buttons-panel">
      <button onClick={() => {props.buttonMethod('add');}}>Add 1</button>
      <button onClick={() => {props.buttonMethod('reinit');}}>ReInit</button>
      <button onClick={() => {props.buttonMethod('reset');}}>Reset</button>   
      <button onClick={() => {props.buttonMethod('step');}}>Step:<span>{props.stepValue}</span></button>   
   </div>
 );   
}

export default ButtonsPanel;