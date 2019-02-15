import React, { Component } from 'react';
import FeedHeader from '../../components/FeedHeader/FeedHeader.js';
import Feed from '../../components/Feed/Feed.js';

class FeedSection extends Component {
  render() {
    return (
      <div>
        <FeedHeader />
        <Feed handleNavigation={this.props.handleNavigation} />
      </div>
    );
  }
}

export default FeedSection;
