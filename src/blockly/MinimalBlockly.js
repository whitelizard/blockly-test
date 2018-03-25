import React, { Component } from 'react';

class MinimalBlockly extends Component {
  render() {
    return <div ref={c => (this.area = c)} />;
  }
}

export default MinimalBlockly;
