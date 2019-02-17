import React, { Component } from 'react';
import './CommentInput.css';

class CommentInput extends Component {
  handleChange = e => {
    this.props.changeValue(e.target.value);
  };

  render() {
    return (
      <input
        autoFocus
        onChange={this.handleChange}
        value={this.props.value}
        className="comment-input"
        placeholder="Add a comment ..."
      />
    );
  }
}

export default CommentInput;
