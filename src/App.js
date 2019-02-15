import React, { Component } from 'react';
import './App.css';
import FeedSection from './components/FeedSection/FeedSection.js';
import ProfileSection from './components/ProfileSection/ProfileSection.js';
import Footer from './components/Footer/Footer.js';
import CommentsBox from './components/CommentsBox/CommentsBox.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      activeScreen: 1
    };
  }

  handleNavigation = index => {
    this.setState({
      activeScreen: index
    });
  };
  render() {
    return (
      <div className="container">
        {this.state.activeScreen === 1 && (
          <FeedSection handleNavigation={this.handleNavigation} />
        )}
        {this.state.activeScreen === 2 && <ProfileSection />}
        {this.state.activeScreen === 3 && (
          <CommentsBox handleNavigation={this.handleNavigation} />
        )}
        {this.state.activeScreen !== 3 && (
          <Footer handleNavigation={this.handleNavigation} />
        )}
      </div>
    );
  }
}

export default App;
