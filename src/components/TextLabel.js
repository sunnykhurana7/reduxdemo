import React, { Component } from 'react';

class TextLabel extends Component {
  render() {
    return (
      <h3> Count : {this.props.count} </h3>
    );
  }
}

export default TextLabel;
