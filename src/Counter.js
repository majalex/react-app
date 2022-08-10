import React, { Component } from "react";
import './Counter.css';

import Display from "./Display";
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';


class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue
    };
  }

  changeValue = (action) => {

    this.setState((prevState, prevProps) => {

      let currentCounterValue = prevState.counterValue;

      if (action === 'add') {
        currentCounterValue += 1;
      } else if (action === 'reinit') {
        currentCounterValue = prevProps.initValue;
      } else {
        currentCounterValue = 0;
      }

      return ({
        counterValue: currentCounterValue
      });
    });
  }

  render() {

    return (
      <div className="counter">
        <div className="counter-box">
          <span className="counter-element">Counter:</span>
          <Display displayValue={this.state.counterValue} />
        </div>
        <ButtonsPanel buttonMethod={this.changeValue} />
        <Step />
      </div>
    );
  }

}
export default Counter; 
