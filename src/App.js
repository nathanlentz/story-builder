import React, { Component } from 'react';
import styled from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import './App.css';
import Header from './components/layout/Header';
import StoryList from './containers/StoryList';

const store = createStore(reducer);

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header title="Story Builder"/>
          <StoryList />
        </div>
      </Provider>
    );
  }
}

export default App;
