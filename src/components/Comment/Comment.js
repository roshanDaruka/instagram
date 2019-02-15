import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
  render() {
    return (
      <div className="row comment-container">
        <div className="col-xs-2 text-align-center">
          <img className="comment-image" src="http://via.placeholder.com/45" />
        </div>
        <div className="col-xs-10">
          <p className="text-comment-author inline">vinat32&nbsp;</p>
          <p className="text-comment inline">sdkfsdf dsf sdf sdf ds f :p</p>
          <p className="text-comment-duration">1 hr</p>
        </div>
      </div>
    );
  }
}

export default Comment;
