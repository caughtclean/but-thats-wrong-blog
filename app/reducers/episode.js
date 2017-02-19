import { combineReducers } from 'redux';
import * as types from '../types';

const episode1 = (state =
  { url: "yFTSHil4Owk",
    header: "EPISODE 1"
  }
) => {
  return state;
};

const episode2 = (state =
  { url: "-7sKmD3meLs",
    header: "EPISODE 2"
  }
) => {
  return state;
};

const episode3 = (state =
  { url: "yFTSHil4Owk",
    header: "EPISODE 3"
  }
) => {
  return state;
};

const episode4 = (state =
  { url: "pmxYePDPV6M",
    header: "EPISODE 4"
  }
) => {
  return state;
};


const episodeReducer = combineReducers({
  episode1,
  episode2,
  episode3,
  episode4
});


export default episodeReducer;
