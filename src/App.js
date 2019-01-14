import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Header from './components/layout/Header';
import StoryList from './components/StoryList';

class App extends Component {

  state = {
    stories: [
      {
        id: '1',
        title: "Story 1"
      },
      {
        id: '2',
        title: "Story 2"
      }
    ]
  };
  
  render() {
    return (
      <div className="App">
        <Header title="Story Builder"/>
        <StoryList stories={this.state.stories}/>
      </div>
    );
  }
}

export default App;
