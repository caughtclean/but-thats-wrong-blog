import React, { Component} from 'react';
import FacebookProvider, { Comments } from 'react-facebook';
import Episode from '../containers/Episode';
import classNames from 'classnames/bind';
import styles from '../css/components/comments';

const cx = classNames.bind(styles);

export default class Example extends Component {

 constructor(props) {
    super(props);
    this.state = {
     key: ""
    };

  }


  render() {
    const {epComments} = this.props;
        return (
            <FacebookProvider appID="195714124244006">
            <div className={cx('comments')}>
              <Comments href={epComments} />
            </div>
            </FacebookProvider>

        );
  }
}