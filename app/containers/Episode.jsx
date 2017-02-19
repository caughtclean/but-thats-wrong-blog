import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from '../css/components/login';
import Video from '../components/Video';


const cx = classNames.bind(styles);

class Episode extends Component {
  render() {
    const {episode} = this.props;
    return (
      <div className={cx('vote')}>
        <Video
          episode={episode} />
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