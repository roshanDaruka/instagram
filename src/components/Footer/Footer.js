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
            <Icons icon="bookmark" />
          </div>
          <div className="col-xs-2">
            <Icons icon="bookmark" />
          </div>
          <div className="col-xs-2">
            <Icons icon="bookmark" />
          </div>
          <div className="col-xs-2">
            <Icons icon="bookmark" />
          </div>
          <div className="col-xs-2">
            <Icons icon="bookmark" />
          </div>
          <div className="col-xs-1" />
        </div>
      </div>
    );
  }
}

export default Footer;
