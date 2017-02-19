import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from '../css/components/login';
import Video from '../components/Video';


const cx = classNames.bind(styles);

class Episode extends Component {

   constructor(...args) {
    super(...args);
    this.state = {
     episodeNum: 1
    };

  }

   episodeSelector() {
    if (this.state.episodeNum === 1 || this.state.episodeNum === 0) {
      return(
      <div className={cx('selectors')}>
       <button
          className={cx('button')}
          onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum +1  })}>+</button>
      </div>
      )
    }
    if (this.state.episodeNum === 4) {
      return(
      <div className={cx('selectors')}>
       <button
            className={cx('button')}
            onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum -1  })}>-</button>
      </div>
      )
    }
    else {
      return(
        <div className={cx('selectors')}>
         <button
            className={cx('button')}
            onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum +1  })}>+</button>
         <button
            className={cx('button')}
            onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum -1  })}>-</button>
        </div>
      )
    }
  }


  setEpisode() {
    const {episode} = this.props;
    if (this.state.episodeNum === 1 || this.state.episodeNum === 0) {
      return (episode.episode1)
    }
    if (this.state.episodeNum === 2) {
      return (episode.episode2)
    }
    if (this.state.episodeNum === 3) {
      return (episode.episode3)
    }
    if (this.state.episodeNum === 4) {
      return (episode.episode4)
    }
  }



  render() {
    const {episode, episodeSelector, setEpisode} = this.props;
    return (
      <div className={cx('video')}>
        <Video
          episode={this.setEpisode()}
        />
          {this.episodeSelector()}
      </div>

      )
  }


}


function mapStateToProps(state) {
  return {
    episode: state.episode
  };
}

export default connect(mapStateToProps)(Episode);