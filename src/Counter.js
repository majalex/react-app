import React, { Component } from "react";
import './Counter.css';

import Display from "./Display";
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';


class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      stepValue: 1
    };
  }

  changeStepValue = (event) => {
    this.setState({
      stepValue: event.target.value
    })
  }

  changeValue = (action) => {
    this.setState((prevState, prevProps) => {

      let currentCounterValue = prevState.counterValue;

      if (action === 'add') {
        currentCounterValue += 1;
      } else if (action === 'reinit') {
        currentCounterValue = prevProps.initValue;
      } else if (action === 'reset') {
        currentCounterValue = 0;
      }
      else {
        currentCounterValue += +this.state.stepValue;
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
        <ButtonsPanel buttonMethod={this.changeValue} stepValue={this.state.stepValue} />
        <Step stepMethod={this.changeStepValue} />
      </div>
    );
  }

}
export default Counter; 
