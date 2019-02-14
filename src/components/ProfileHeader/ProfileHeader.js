import React, { Component } from 'react';
import './ProfileHeader.css';
import Icons from '../../components/Icons/Icons.js';

class ProfileHeader extends Component {
  render() {
    return (
      <div className="row profile-header-container pyMd">
        <div className="col-xs-9">
          <p className="profile-header-title">roshanDaruka</p>
        </div>
        <div className="col-xs-1">
          <Icons icon="bookmark" />
        </div>
        <div className="col-xs-1">
          <Icons icon="bookmark" />
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
