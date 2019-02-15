import React, { Component } from 'react';
import Icons from '../../components/Icons/Icons';
import './CommentsBox.css';
import CommentsBoxHeader from '../../components/CommentsBoxHeader/CommentsBoxHeader.js';
import CommentsBoxBody from '../../components/CommentsBoxBody/CommentsBoxBody.js';
import CommentsBoxFooter from '../../components/CommentsBoxFooter/CommentsBoxFooter.js';

class CommentsBox extends Component {
  render() {
    return (
      <div className="comments-box-container">
        <CommentsBoxHeader handleNavigation={this.props.handleNavigation} />
        <CommentsBoxBody />
        <CommentsBoxFooter />
      </div>
    );
  }
}

export default CommentsBox;
