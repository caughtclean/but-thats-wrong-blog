import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/entrybox';
import Episode from '../containers/Episode'


const cx = classNames.bind(styles);

const Video = ({episode, next, header}) => {
  const base = "https://www.youtube.com/embed/";
  const episodeNumber = base.concat(episode)
  return (
    <div className={cx('video')}>
      <h1>{header}</h1>
      {next}
      <iframe width="560" height="315"
      src={episodeNumber} frameborder="0" allowfullscreen>
      </iframe>
    </div>
    )
}



export default Video;