import React, { Component } from 'react';

class Icon extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { icon, ...restProps } = this.props;
    const className = `icon ${this.props.icon}`;
    return <div className={className} {...restProps} />;
  }
}

export default Icon;
