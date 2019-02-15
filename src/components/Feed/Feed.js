import React, { Component } from 'react';
import './Feed.css';
import Post from '../../components/Post/Post.js';
class Feed extends Component {
  render() {
    return (
      <div className="feed-section-container">
        <Post handleNavigation={this.props.handleNavigation} />
        <Post handleNavigation={this.props.handleNavigation} />
        <Post handleNavigation={this.props.handleNavigation} />
        <Post handleNavigation={this.props.handleNavigation} />
        <Post handleNavigation={this.props.handleNavigation} />
        <Post handleNavigation={this.props.handleNavigation} />
        <Post handleNavigation={this.props.handleNavigation} />
        <Post handleNavigation={this.props.handleNavigation} />
        <Post handleNavigation={this.props.handleNavigation} />
      </div>
    );
  }
}

export default Feed;
