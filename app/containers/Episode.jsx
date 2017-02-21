import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from '../css/components/episode';
import Video from '../components/Video';
import FacebookProvider from 'react-facebook';
import Comments from '../components/Comments';
import Login from '../components/Login';
import CommentsCount from '../components/CommentsCount';
import {ButtonToolbar, Button} from 'react-bootstrap'



const cx = classNames.bind(styles);

class Episode extends Component {

   constructor(props) {
    super(props);
    this.state = {
     episodeNum: 1
    };

  }







   episodeSelector() {
    if (this.state.episodeNum === 1 || this.state.episodeNum === 0) {
      return(
      <div className='selectors'>
       <button
          className='button'
          onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum +1  })}>Next Episode</button>
      </div>
      )
    }
    if (this.state.episodeNum === 4) {
      return(
      <div className='selectors'>
       <button
            className='button'
            onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum -1  })}>Previous Episode</button>
      </div>
      )
    }
    else {
      return(
        <div>
         <button
            className='next'
            onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum +1  })}>Next Episode</button>
         <button
            className='prev'
            onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum -1  })}>Previous Episode</button>
        </div>
      )
    }
  }

  commentSection () {
    const {comments1, comments2, comments3, comments4} = this.props;

    if (this.state.episodeNum === 1 || this.state.episodeNum === 0) {
      return (
          <Comments
          epComments={comments1}
          key={this.state.episodeNum}
          />
      )
    }
    if (this.state.episodeNum === 2) {
      return (
          <Comments
          epComments={comments2}
          key={this.state.episodeNum}
          />
      )
    }
    if (this.state.episodeNum === 3) {
      return (
          <Comments
          epComments={comments3}
          key={this.state.episodeNum}
          />
      )
    }
    if (this.state.episodeNum === 4) {
      return (
          <Comments
          epComments={comments4}
          key={this.state.episodeNum}
          />
      )
    }
  }

  episodeData() {
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
    const {episode, episodeSelector, episodeData} = this.props;
    return (
      <div className='video'>
        <Video
          episode={this.episodeData().url}
          header={this.episodeData().header}
        />
        {this.commentSection()}
        {this.episodeSelector()}
      </div>

    )
  }


}


function mapStateToProps(state) {
  return {
    episode: state.episode,
    comments1: state.episode.episode1.comments,
    comments2: state.episode.episode2.comments,
    comments3: state.episode.episode3.comments,
    comments4: state.episode.episode4.comments
  };
}

export default connect(mapStateToProps)(Episode);