import { combineReducers } from 'redux';
import * as types from '../types';

const episode1 = (state = "yFTSHil4Owk") => {
  return state;
};

const episode2 = (state = "gBER4Or86hE") => {
  return state;
};

const episodeReducer = combineReducers({
  episode1,
  episode2
});


export default episodeReducer;
