import React, { Component } from 'react';
import './Footer.css';
import Icons from '../../components/Icons/Icons.js';

class Footer extends Component {
  render() {
    return (
      <div className="footer-section-container">
        <div className="row pyMd">
          <div className="col-xs-1" />
          <div className="col-xs-2">
            <Icons
              icon="envelope"
              onClick={() => this.props.handleNavigation(1)}
            />
          </div>
          <div className="text-align-center  col-xs-2">
            <Icons icon="bookmark" />
          </div>
          <div className="text-align-center col-xs-2">
            <Icons icon="like" />
          </div>
          <div className="text-align-center col-xs-2">
            <Icons icon="comment" />
          </div>
          <div className="text-align-right col-xs-2">
            <Icons
              icon="options"
              onClick={() => this.props.handleNavigation(2)}
            />
          </div>
          <div className="col-xs-1" />
        </div>
      </div>
    );
  }
}

export default Footer;
