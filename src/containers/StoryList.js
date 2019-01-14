import { connect } from 'react-redux';
import * as StoryActions from '../actions/actions';
import { bindActionCreators } from 'redux';
import StoryList from '../components/StoryList';

const mapStateToProps = state => ({
  stories: state.stories
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(StoryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryList);