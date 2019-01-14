import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StoryListWrapper = styled.div`
  display: grid;
  grid-template-rows:    repeat(4, 100px);
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const StoryList = ({ stories, actions }) => (
  <StoryListWrapper>
    {stories.length}
  </StoryListWrapper>
)

StoryList.propTypes = {
  stories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default StoryList;