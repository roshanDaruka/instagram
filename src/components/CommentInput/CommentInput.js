import React, { Component } from 'react';
import './CommentInput.css';

class CommentInput extends Component {
  render() {
    return <input className="comment-input" placeholder="Add a comment ..." />;
  }
}

export default CommentInput;
