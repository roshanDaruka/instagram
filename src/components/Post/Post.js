import React, { Component } from 'react';
import './Post.css';
import Icons from '../../components/Icons/Icons.js';

class Post extends Component {
  render() {
    return (
      <div className="post-section-container">
        <div className="row pyMd">
          <div className="col-xs-1 vertical-center pr0">
            <img className="post-dp" src="http://via.placeholder.com/35x35" />
          </div>
          <div className="col-xs-10 vertical-center">
            <p className="text-bold plMd">sagar_keshrani</p>
          </div>
          <div className="vertical-center">
            <Icons icon="options" />
          </div>
        </div>
        <div className="post-image-container">
          <img
            className="post-image"
            src="http://via.placeholder.com/400x400"
          />
        </div>
        <div className="row pyMd">
          <div className="col-xs-11">
            <div className="row">
              <div className="col-xs-1 vertical-center pr0">
                <Icons icon="like" />
              </div>
              <div className="col-xs-1 vertical-center pr0">
                <Icons icon="comment" />
              </div>
              <div className="col-xs-1 vertical-center pr0">
                <Icons icon="envelope" />
              </div>
            </div>
          </div>
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-1 vertical-center pr0">
                <Icons icon="bookmark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
