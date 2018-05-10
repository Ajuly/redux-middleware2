import React, { Component } from 'react';
import {connect} from '../react-redux';
import actions from '../store/actions';

/**
 * state变成了属性对象  {number:0}
 * 
 * this.props 
 * {number: 1, increment: ƒ}   action和state都被映射成了属性
 */

class Counter extends Component {
  render() {
    return (
      <div>
       <p>{this.props.number}</p>
       <button onClick={this.props.increment}>+</button>
       <button onClick={this.props.thunkIncrement}>过一秒后加一</button>
       <button onClick={this.props.promiseIncrement}>Promise加一</button>
       <button onClick={this.props.payloadIncrement}>Promise加一</button>
      </div>
    )
  }
}

export default connect(
    state => state,
    actions
)(Counter);
