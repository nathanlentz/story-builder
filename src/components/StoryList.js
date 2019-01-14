import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StoryListItem from './StoryListItem';

const StoryListWrapper = styled.div`
  display: grid;
  width: 100%;
`;
class StoryList extends Component {

  render() {
    return(
      <StoryListWrapper>
        {this.props.stories.map((story) => (
          <StoryListItem key={story.id} title={story.title}/>
        ))}
      </StoryListWrapper>
    )
  }
}

export default StoryList;

StoryList.propTypes = {
  stories: PropTypes.array.isRequired
}