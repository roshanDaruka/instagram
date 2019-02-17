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
          <div className="vertical-center col-xs-10">
            <form onSubmit={this.props.handleCommentPost}>
              <div className="vertical-center col-xs-9">
                <CommentInput
                  changeValue={this.props.changeValue}
                  value={this.props.value}
                />
              </div>
              <div className="vertical-center col-xs-3">
                <input type="submit" className="post-button" value="Post" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentsBox;
