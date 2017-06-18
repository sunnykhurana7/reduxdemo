import React, { Component,  } from 'react';
import Button from '../components/Button'
import TextLabel from '../components/TextLabel'
import {connect} from 'react-redux'
import {increment, decrement} from '../actions'
import logo from '../logo.svg';
import '../App.css';
import UserInput from '../components/UserInput'

class Counter extends Component {

  constructor() {
    super();
    this.state = {
      username:''
    }
  }

  getValue(username) {
    this.setState({
        username:username
    })
  }

  handleIncrement = () => {
    const { increment } = this.props
    increment()
  }
  handleDecrement = () => {
    const { decrement } = this.props
    decrement()
  }
  render() {
    console.log("gjhgj",this)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Simple React-Redux Counter</h2>
        </div>
        <Button clickHandler={this.handleIncrement.bind(this)} buttonText="Increment"/>
        { TextLabel(this.props.count) }
        <Button clickHandler={this.handleDecrement.bind(this)} buttonText="Decrement"/>





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
