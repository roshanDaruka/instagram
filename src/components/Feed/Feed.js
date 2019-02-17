import React, { Component } from 'react';
import './Feed.css';
import Post from '../../components/Post/Post.js';
import gql from 'graphql-tag';
class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const user_id = this.props.user_id;
    if (!navigator.onLine) {
      this.setState({ posts: JSON.parse(localStorage.getItem('posts')) });
    } else {
      this.props.apolloClient
        .query({
          query: gql`
            query getPosts($user_id: String) {
              posts(user_id: $user_id) {
                id
                user {
                  nickname
                  avatar
                }
                image
                caption
                likes
                comment {
                  author {
                    id
                    nickname
                  }
                  text
                }
              }
            }
          `,
          variables: {
            user_id: user_id
          }
        })
        .then(response => {
          this.setState({ posts: response.data.posts });
          localStorage.setItem('posts', JSON.stringify(response.data.posts));
        })
        .catch(error => {
          console.log('error occured while fetching data', error);
        });
    }
  }

  render() {
    const posts = this.state.posts;
    const setComments = this.props.setComments;
    if (posts.length === 0) {
      return <div className="feed-section-container">No posts</div>;
    }
    return (
      <div className="feed-section-container">
        {posts.map(post => (
          <Post
            id={post.id}
            likes={post.likes}
            comments={post.comments}
            nickname={post.user.nickname}
            avatar={post.user.avatar}
            image={post.image}
            caption={post.caption}
            key={post.id}
            comment={post.comment}
            handleNavigation={this.props.handleNavigation}
            setComments={setComments}
          />
        ))}
      </div>
    );
  }
}

export default Feed;
