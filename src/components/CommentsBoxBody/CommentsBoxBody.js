import React, { Component } from 'react';
import Icons from '../../components/Icons/Icons';
import './CommentsBoxBody.css';
import Comment from '../../components/Comment/Comment.js';

class CommentsBox extends Component {
  render() {
    const comments = this.props.comments;
    return (
      <div className="comments-box-body-container">
        {comments.map(comment => (
          <Comment
            key={comment.id}
            nickname={comment.author.nickname}
            avatar={comment.author.avatar}
            text={comment.text}
            timestamp={comment.timestamp}
          />
        ))}
      </div>
    );
  }
}

export default CommentsBox;
