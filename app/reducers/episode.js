import { combineReducers } from 'redux';
import * as types from '../types';

const episode1 = (state = "yFTSHil4Owk") => {
  return state;
};

const episode2 = (state = "gBER4Or86hE") => {
  return state;
};

const episode3 = (state = "-7sKmD3meLs") => {
  return state;
};

const episode4 = (state = "pmxYePDPV6M") => {
  return state;
};


const episodeReducer = combineReducers({
  episode1,
  episode2,
  episode3,
  episode4
});


export default episodeReducer;
