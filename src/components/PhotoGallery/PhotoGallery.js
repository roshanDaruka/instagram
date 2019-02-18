import React, { Component } from 'react';
import './PhotoGallery.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class PhotoGallery extends Component {
  render() {
    return (
      <div className="PhotoGallery-container">
        <div className="row pyMd">
          <div className="col-xs-4 text-align-center gallery">
            <LazyLoadImage
              alt="post"
              className="photo-gallery-image"
              src="http://lorempixel.com/300/480/people"
              effect="blur"
            />
          </div>
          <div className="col-xs-4 text-align-center gallery">
            <LazyLoadImage
              alt="post"
              className="photo-gallery-image"
              src="http://lorempixel.com/300/480/transport"
              effect="blur"
            />
          </div>
          <div className="col-xs-4 text-align-center gallery">
            <LazyLoadImage
              alt="post"
              className="photo-gallery-image"
              effect="blur"
              src="http://lorempixel.com/300/480/nature"
            />
          </div>
          <div className="col-xs-4 text-align-center gallery">
            <LazyLoadImage
              alt="post"
              className="photo-gallery-image"
              src="http://lorempixel.com/300/480/cats"
              effect="blur"
            />
          </div>
          <div className="col-xs-4 text-align-center gallery">
            <LazyLoadImage
              alt="post"
              className="photo-gallery-image"
              effect="blur"
              src="http://lorempixel.com/300/480/city"
            />
          </div>
          <div className="col-xs-4 text-align-center gallery">
            <LazyLoadImage
              alt="post"
              className="photo-gallery-image"
              src="http://lorempixel.com/300/480/sports"
              effect="blur"
            />
          </div>
          <div className="col-xs-4 text-align-center gallery">
            <LazyLoadImage
              alt="post"
              effect="blur"
              className="photo-gallery-image"
              src="http://lorempixel.com/300/480/nature"
            />
          </div>
          <div className="col-xs-4 text-align-center gallery">
            <LazyLoadImage
              alt="post"
              className="photo-gallery-image"
              src="http://lorempixel.com/300/480/cats"
              effect="blur"
            />
          </div>
          <div className="col-xs-4 text-align-center gallery">
            <LazyLoadImage
              alt="post"
              className="photo-gallery-image"
              effect="blur"
              src="http://lorempixel.com/300/480/city"
            />
          </div>
          <div className="col-xs-4 text-align-center gallery">
            <LazyLoadImage
              alt="post"
              className="photo-gallery-image"
              effect="blur"
              src="http://lorempixel.com/300/480/sports"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
