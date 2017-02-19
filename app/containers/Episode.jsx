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

   nextEpisode() {
    return(
     <button
      className={cx('button')}
      onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum +1  })}>+</button>
    )
  }

  prevEpisode() {
    return(
     <button
      className={cx('button')}
      onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum -1  })}>-</button>
    )
  }

  setEpisode() {
    const {episode} = this.props;
    if (this.state.episodeNum === 1) {
   return (
    episode.episode1
    )
  }
    if (this.state.episodeNum === 2) {
      return (
        episode.episode2
        )
    }
}



  render() {
    const {episode, nextEpisode, prevEpisode, setEpisode, episodeN} = this.props;
    return (
      <div className={cx('video')}>
        <Video
          episode={this.setEpisode()}
        />
          {this.nextEpisode()}
          {this.prevEpisode()}
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