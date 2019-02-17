import React, { Component } from 'react';
import './Post.css';
import Icons from '../../components/Icons/Icons.js';

class Post extends Component {
  openCommentSection = () => {
    this.props.setComments(this.props.id);
    this.props.handleNavigation(3);
  };

  render() {
    const nickname = this.props.nickname;
    const avatar = this.props.avatar;
    const image = this.props.image;
    const comment = this.props.comment;
    const likes = this.props.likes;
    // const caption = this.props.caption;

    return (
      <div className="post-section-container">
        <div className="row pyMd">
          <div className="col-xs-1 vertical-center pr0">
            <img className="post-dp" src={avatar} />
          </div>
          <div className="col-xs-10 vertical-center">
            <p className="text-bold plMd">{nickname}</p>
          </div>
          <div className="vertical-center">
            <Icons icon="options" />
          </div>
        </div>
        <div className="post-image-container">
          <img className="post-image" src={image} />
        </div>
        <div className="row pyMd">
          <div className="col-xs-10">
            <div className="row">
              <div className="col-xs-1 vertical-center pr0">
                <Icons icon="like" />
              </div>
              <div className="col-xs-1 vertical-center pr0">
                <Icons icon="comment" onClick={this.openCommentSection} />
              </div>
              <div className="col-xs-1 vertical-center pr0">
                <Icons icon="envelope" />
              </div>
            </div>
          </div>
          <div className="col-xs-2 text-align-right">
            <Icons icon="bookmark" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p className="comment-text-author inline prSm">{likes}</p>
            <p className="comment-text inline">likes</p>
          </div>
          <div className="col-xs-12">
            <p className="comment-text-author inline prSm">
              {comment.author.nickname}
            </p>
            <p className="comment-text inline">{comment.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
