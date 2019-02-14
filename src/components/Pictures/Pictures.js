import React, { Component } from 'react';
import './Pictures.css';
import Icons from '../../components/Icons/Icons.js';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery.js';
class Pictures extends Component {
  render() {
    return (
      <div className="">
        <div className="row pyMd pictures-container">
          <div className="col-xs-4 text-align-center">
            <Icons icon="bookmark" />
          </div>
          <div className="col-xs-4 text-align-center">
            <Icons icon="bookmark" />
          </div>
          <div className="col-xs-4 text-align-center">
            <Icons icon="bookmark" />
          </div>
        </div>
        <PhotoGallery />
      </div>
    );
  }
}

export default Pictures;
