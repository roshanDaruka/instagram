import React, { Component } from 'react';
import Icons from '../../components/Icons/Icons.js';
import './FeedHeader.css';

class FeedHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="row feed-header-container">
        <div className="col-xs-10">
          <div className="row">
            <div className="vertical-center col-xs-1">
              <Icons icon="camera" />
            </div>
            <div className="vertical-center col-xs-4">
              <Icons icon="instagram" />
            </div>
          </div>
        </div>
        <div className="col-xs-2">
          <div className="row">
            <div className="vertical-center col-xs6">
              <Icons icon="tv" />
            </div>
            <div className="vertical-center col-xs-6">
              <Icons icon="envelope" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedHeader;
