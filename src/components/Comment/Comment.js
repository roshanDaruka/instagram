import React, { Component } from 'react';
import './Comment.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
class Comment extends Component {
  formatTimestamp = timestamp => {
    const date = new Date(parseInt(timestamp));
    let seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + ' years';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + ' months';
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' days';
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hours';
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  };
  render() {
    const avatar = this.props.avatar;
    const nickname = this.props.nickname;
    const text = this.props.text;
    const timestamp = this.formatTimestamp(this.props.timestamp);
    return (
      <div className="row comment-container">
        <div className="col-xs-2 text-align-center">
          <LazyLoadImage
            alt="post"
            effect="blur"
            className="comment-image"
            src={avatar}
            heigh="233"
          />
        </div>
        <div className="col-xs-10">
          <p className="text-comment-author inline">{nickname}&nbsp;</p>
          <p className="text-comment inline">{text}</p>
          <p className="text-comment-duration">{timestamp} ago</p>
        </div>
      </div>
    );
  }
}

export default Comment;
