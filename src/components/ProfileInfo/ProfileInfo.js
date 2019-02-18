import React, { Component } from 'react';
import './ProfileInfo.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
class ProfileInfo extends Component {
  render() {
    return (
      <div>
        <div className="row profile-info-container">
          <div className="col-xs-5 profile-info-dp-container">
            <LazyLoadImage
              alt="post"
              className="profile-info-dp"
              src="http://lorempixel.com/50/50/people"
              effect="blur"
            />
            <p className="profile-full-name">Roshan Daruka</p>
          </div>
          <div className="col-xs-7 profile-info-section">
            <div className="row">
              <div className="col-xs-4 text-align-center">
                <p className="profile-metrics">121</p>
                <p className="profile-metrics-title">posts</p>
              </div>
              <div className="col-xs-4 text-align-center">
                <p className="profile-metrics">122</p>
                <p className="profile-metrics-title">Followers</p>
              </div>
              <div className="col-xs-4 text-align-center">
                <p className="profile-metrics">2323</p>
                <p className="profile-metrics-title">Following</p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <button className="edit-profile-button">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-align-center">
            <button className="call-button">call</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
