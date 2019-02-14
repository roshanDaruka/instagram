import React, { Component } from 'react';

class Icon extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const className = `icon ${this.props.icon}`;
    return <div className={className} />;
  }
}

export default Icon;
