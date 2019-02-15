import React, { Component } from 'react';
import Icons from '../../components/Icons/Icons';
import './CommentsBoxHeader.css';

class CommentsBoxHeader extends Component {
  render() {
    return (
      <div className="row comments-box-header-container">
        <div className="text-align-center vertical-center col-xs-2">
          <Icons icon="back" onClick={() => this.props.handleNavigation(1)} />
        </div>
        <div className="vertical-center col-xs-8">
          <p className="comments-box-text ">Comments</p>
        </div>
        <div className="text-align-center vertical-center col-xs-2">
          <Icons icon="envelope" />
        </div>
      </div>
    );
  }
}

export default CommentsBoxHeader;
