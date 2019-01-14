import * as types from './types';

export const addStory = text => ({ type: types.ADD_STORY, text});
export const deleteStory = id => ({ type: types.DELETE_STORY, id});
