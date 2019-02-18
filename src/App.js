import React, { Component } from 'react';
import './App.css';
import FeedSection from './components/FeedSection/FeedSection.js';
import ProfileSection from './components/ProfileSection/ProfileSection.js';
import Footer from './components/Footer/Footer.js';
import CommentsBox from './components/CommentsBox/CommentsBox.js';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { backendUrl } from './config.js';

const client = new ApolloClient({
  uri: backendUrl
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      // replace currentScreen with react router
      currentScreen: 1,
      post_id: null,
      user: {}
    };
  }

  componentDidMount() {
    debugger;
    if (!navigator.onLine) {
    } else {
      client
        .query({
          query: gql`
            {
              user(user_id: "a") {
                id
                nickname
                avatar
              }
            }
          `
        })
        .then(response => {
          this.setState({ user: response.data.user });
        })
        .catch(error => {
          console.log('error occured while fetching data', error);
        });
    }
  }

  handleNavigation = index => {
    this.setState({
      currentScreen: index
    });
  };

  setComments = post_id => {
    this.setState({
      post_id: post_id
    });
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          {this.state.currentScreen === 1 && (
            <FeedSection
              handleNavigation={this.handleNavigation}
              apolloClient={client}
              setComments={this.setComments}
              user_id={this.state.user.id}
            />
          )}
          {this.state.currentScreen === 2 && <ProfileSection />}
          {this.state.currentScreen === 3 && (
            <CommentsBox
              handleNavigation={this.handleNavigation}
              post_id={this.state.post_id}
              apolloClient={client}
              user={this.state.user}
            />
          )}
          {this.state.currentScreen !== 3 && (
            <Footer handleNavigation={this.handleNavigation} />
          )}
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
