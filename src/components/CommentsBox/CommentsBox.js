import React, { Component } from 'react';
import './CommentsBox.css';
import CommentsBoxHeader from '../../components/CommentsBoxHeader/CommentsBoxHeader.js';
import CommentsBoxBody from '../../components/CommentsBoxBody/CommentsBoxBody.js';
import CommentsBoxFooter from '../../components/CommentsBoxFooter/CommentsBoxFooter.js';
import gql from 'graphql-tag';
class CommentsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      value: ''
    };
  }

  componentDidMount() {
    const post_id = this.props.post_id;
    if (!navigator.onLine) {
    } else {
      this.props.apolloClient
        .query({
          query: gql`
            query getComments($post_id: String) {
              comments(post_id: $post_id) {
                author {
                  nickname
                  avatar
                  id
                }
                text
                id
                timestamp
              }
            }
          `,
          variables: {
            post_id: post_id
          }
        })
        .then(response => {
          console.log('here', response);
          this.setState({ comments: response.data.comments });
        })
        .catch(error => {
          console.log('error occured while fetching data', error);
        });
    }
  }

  changeValue = value => {
    this.setState({ value });
  };

  handleCommentPost = e => {
    e.preventDefault();
    const { nickname, avatar, id } = this.props.user;
    debugger;
    const post_id = this.props.post_id;
    debugger;
    if (!navigator.onLine) {
    } else {
      this.props.apolloClient
        .mutate({
          mutation: gql`
            mutation updateComment($CommentInput: CommentInput) {
              updateComments(input: $CommentInput) {
                id
                author {
                  nickname
                  avatar
                  id
                }
                text
                timestamp
              }
            }
          `,
          variables: {
            CommentInput: {
              post_id: post_id,
              author: {
                nickname,
                avatar,
                id
              },
              text: this.state.value,
              timestamp: Math.floor(Date.now()).toString()
            }
          }
        })
        .then(response => {
          this.setState({
            comments: [...this.state.comments, response.data.updateComments],
            value: ''
          });
        })
        .catch(error => {
          debugger;
          console.log('error occured while fetching data', error);
        });
    }
  };

  render() {
    const comments = this.state.comments;
    return (
      <div className="comments-box-container">
        <CommentsBoxHeader handleNavigation={this.props.handleNavigation} />
        {comments.length > 0 && (
          <CommentsBoxBody
            comments={comments}
            apolloClient={this.props.apolloClient}
          />
        )}
        <CommentsBoxFooter
          value={this.state.value}
          changeValue={this.changeValue}
          handleCommentPost={this.handleCommentPost}
        />
      </div>
    );
  }
}

export default CommentsBox;
