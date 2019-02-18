import React, { Component } from 'react';
import FeedHeader from '../../components/FeedHeader/FeedHeader.js';
import Feed from '../../components/Feed/Feed.js';

class FeedSection extends Component {
  render() {
    const apolloClient = this.props.apolloClient;
    const setComments = this.props.setComments;
    return (
      <div>
        <FeedHeader />
        {this.props.user_id && (
          <Feed
            handleNavigation={this.props.handleNavigation}
            setComments={setComments}
            apolloClient={apolloClient}
            user_id={this.props.user_id}
          />
        )}
      </div>
    );
  }
}

export default FeedSection;
