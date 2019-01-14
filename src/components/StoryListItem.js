import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StoryItem = styled.div`
  width: 200px;
  padding: 15px 25px;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
`;

class StoryListItem extends Component {

  render(){
    return(
      <StoryItem>
        {this.props.title}
      </StoryItem>
    );
  }
}

export default StoryListItem;

StoryListItem.propTypes = {
  title: PropTypes.string.isRequired
};