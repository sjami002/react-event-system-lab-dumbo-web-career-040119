// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  handleButton = (event) => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
      <input type="password" onKeyUp={this.handleButton} />
      </div>
    );
  }

}

export default Keypad;
