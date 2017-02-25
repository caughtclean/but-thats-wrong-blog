import React, { Component} from 'react';
import FacebookProvider, { Like } from 'react-facebook';
import Episode from '../containers/Episode';
import classNames from 'classnames/bind';
import styles from '../css/components/like';

const cx = classNames.bind(styles);

export default class Example extends Component {

  constructor(props) {
    super(props);
    this.state = {
     key: ""
    };

  }


  render() {
    const {likes, dislikes} = this.props;
    return (
    <div className={cx('likeContainer')}>
      <FacebookProvider appID="195714124244006">
        <div className={cx('like')}>
          <span>Like if you think I am wrong (I am not)</span>
          <Like href={dislikes} />
        </div>
      </FacebookProvider>
      <FacebookProvider appID="195714124244006">
        <div className={cx('dislike')}>
          <span>Like if you think I am right (I am)</span>
          <Like href={likes} />
        </div>
      </FacebookProvider>
    </div>
    );
  }
}