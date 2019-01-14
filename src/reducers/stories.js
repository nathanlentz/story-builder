import {
  ADD_STORY,
  DELETE_STORY,
  OPEN_STORY
} from '../actions/types';

const initialState = [ 
  {
    id: '1',
    title: "Story 1"
  },
  {
    id: '2',
    title: "Story 2"
  }
]

export default function worlds(state = initialState, action) {
  switch(action.type){
    case ADD_STORY:
      return [
        ...state, 
        {
          id: '3',
          title: 'Story 3'
        }
      ];
    case DELETE_STORY:
      return state.filter(story => story.id !== action.id);
    case OPEN_STORY:
      return state;
    default:
      return state;
  }
}