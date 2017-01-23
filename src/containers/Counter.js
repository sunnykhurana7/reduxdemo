import React, { Component } from 'react';
import Button from '../components/Button'
import TextLabel from '../components/TextLabel'
import {connect} from 'react-redux'
import {increment, decrement} from '../actions'
import logo from '../logo.svg';
import '../App.css';

class Counter extends Component {
  handleIncrement = () => {
    const { increment } = this.props
    increment()
  }
  handleDecrement = () => {
    const { decrement } = this.props
    decrement()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Simple React-Redux Counter</h2>
        </div>
        <Button clickHandler={this.handleIncrement} buttonText="Increment"/>
        <TextLabel count={this.props.count}/>
        <Button clickHandler={this.handleDecrement} buttonText="Decrement"/>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return state.counter
}
const mapDispatchToProps = (dispatch) => ({
  increment: () => (
    dispatch(increment())
  ),
  decrement: () => (
    dispatch(decrement())
  ),
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
