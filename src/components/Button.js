import React, { Component } from 'react';

class Button extends Component {
  render() {
    let {clickHandler, buttonText} = this.props
    return (
      <div className="button">
        <input type="button" onClick={clickHandler} value={buttonText}/>
      </div>
    );
  }
}

export default Button;
