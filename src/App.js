import React, { Component } from 'react';
import './App.css';
// import FeedSection from './components/FeedSection/FeedSection.js';
// import ProfileSection from './components/ProfileSection/ProfileSection.js';
// import Footer from './components/Footer/Footer.js';
// import CommentsBox from './components/CommentsBox/CommentsBox.js';

import Todo from './TodoApp.js';

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
        <Todo />
      </div>
    );
  }
}

export default App;
