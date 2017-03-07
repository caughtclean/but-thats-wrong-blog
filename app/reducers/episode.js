import { combineReducers } from 'redux';
import * as types from '../types';

const episode1 = (state =
  { url: "UsQVefoTs-I",
    header: "EPISODE 1: The Death Of Memes",
    comments: "http://www.butthatswrong.com/comments/episode1",
    likes: "http://www.butthatswrong.com/comments/episode1likes",
    dislikes: "http://www.butthatswrong.com/comments/episode1dislikes"
  }
)=> {
  return state;
};


const episode2 = (state =
  { url: "-7sKmD3meLs",
    header: "EPISODE 2",
    comments: "http://www.butthatswrong.com/comments/episode2",
    likes: "http://www.butthatswrong.com/comments/episode2likes",
    dislikes: "http://www.butthatswrong.com/comments/episode2dislikes"
  }
) => {
  return state;
};

const episode3 = (state =
  { url: "yFTSHil4Owk",
    header: "EPISODE 3",
    comments: "http://www.butthatswrong.com/comments/episode3",
    likes: "http://www.butthatswrong.com/comments/episode3likes",
    dislikes: "http://www.butthatswrong.com/comments/episode3dislikes"
  }
) => {
  return state;
};

const episode4 = (state =
  { url: "pmxYePDPV6M",
    header: "EPISODE 4",
    comments: "http://www.butthatswrong.com/comments/episode4",
    likes: "http://www.butthatswrong.com/comments/episode4likes",
    dislikes: "http://www.butthatswrong.com/comments/episode4dislikes"
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
