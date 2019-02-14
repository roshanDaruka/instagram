import React, { Component } from 'react';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.js';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.js';
import Pictures from '../../components/Pictures/Pictures.js';

class ProfileSection extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ProfileInfo />
        <Pictures />
      </div>
    );
  }
}

export default ProfileSection;
