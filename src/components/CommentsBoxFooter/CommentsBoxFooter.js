import React, { Component } from 'react';
import './CommentsBoxFooter.css';
import CommentInput from '../../components/CommentInput/CommentInput.js';

class CommentsBox extends Component {
  render() {
    return (
      <div className="comments-box-footer-container">
        <div className="row">
          <div className="vertical-center text-align-center col-xs-2">
            <img
              className="comment-image"
              src="http://via.placeholder.com/40x40"
            />
          </div>
          <div className="vertical-center col-xs-8">
            <CommentInput />
          </div>
          <div className="vertical-center col-xs-2">
            <button className="post-button">Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentsBox;
