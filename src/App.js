import React, { Component } from 'react';
import './App.css';
import FeedSection from './components/FeedSection/FeedSection.js';
import ProfileSection from './components/ProfileSection/ProfileSection.js';
import Footer from './components/Footer/Footer.js';
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        {/* <FeedSection /> */}
        <ProfileSection />
        <Footer />
      </div>
    );
  }
}

export default App;
