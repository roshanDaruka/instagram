import React, { Component } from 'react';
import Icons from '../../components/Icons/Icons';
import './CommentsBoxBody.css';
import Comment from '../../components/Comment/Comment.js';

class CommentsBox extends Component {
  render() {
    return (
      <div className="comments-box-body-container">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default CommentsBox;
