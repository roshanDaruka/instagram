import React, { Component } from 'react';
import './Post.css';
import Icons from '../../components/Icons/Icons.js';
import gql from 'graphql-tag';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Post extends Component {
  state = this.props;
  openCommentSection = () => {
    this.props.setComments(this.props.id);
    this.props.handleNavigation(3);
  };

  handleLikeClick = () => {
    if (!navigator.onLine) {
    } else {
      this.props.apolloClient
        .mutate({
          mutation: gql`
            mutation updateLike($post_id: String!, $user_id: String!) {
              updateLikes(post_id: $post_id, user_id: $user_id) {
                id
                user {
                  id
                  nickname
                  avatar
                }
                caption
                image
                comment {
                  author {
                    id
                    nickname
                    avatar
                  }
                }
                likes
              }
            }
          `,
          variables: {
            post_id: this.props.id,
            user_id: this.props.user_id
          }
        })
        .then(response => {
          debugger;
          this.setState({ likes: response.data.updateLikes.likes });
        })
        .catch(error => {
          debugger;
          console.log('error occured while fetching data', error);
        });
    }
  };

  render() {
    const nickname = this.state.nickname;
    const avatar = this.state.avatar;
    const image = this.state.image;
    const comment = this.state.comment;
    const likes = this.state.likes;
    // const caption = this.props.caption;

    return (
      <div className="post-section-container">
        <div className="row pyMd">
          <div className="col-xs-1 vertical-center pr0">
            <LazyLoadImage
              alt="post"
              className="post-dp"
              src={avatar}
              effect="blur"
            />
          </div>
          <div className="col-xs-10 vertical-center">
            <p className="text-bold plMd">{nickname}</p>
          </div>
          <div className="vertical-center">
            <Icons icon="options" />
          </div>
        </div>
        <div className="post-image-container">
          <LazyLoadImage
            alt="post"
            effect="blur"
            className="post-image"
            src={image}
          />
        </div>
        <div className="row pyMd">
          <div className="col-xs-10">
            <div className="row">
              <div className="col-xs-1 vertical-center pr0">
                <Icons onClick={this.handleLikeClick} icon="like" />
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
