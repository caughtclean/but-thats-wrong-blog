import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/video';
import Episode from '../containers/Episode';
;


const cx = classNames.bind(styles);

const Video = ({episode, next, header}) => {
  const base = "https://www.youtube.com/embed/";
  const episodeNumber = base.concat(episode)
  return (
    <div className={cx('video')}>
      <iframe width="854" height="480"
      src={episodeNumber} >
      </iframe>
    </div>

    )
}



export default Video;