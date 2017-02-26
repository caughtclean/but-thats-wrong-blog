import React, { Component} from 'react';
import FacebookProvider, { Like } from 'react-facebook';
import Episode from '../containers/Episode';
import classNames from 'classnames/bind';
import styles from '../css/components/like';
import { Well, Grid, Row, Col, Button, Panel } from 'react-bootstrap';

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
      <Grid>
    <Row className="show-grid">
      <div className={cx('likeContainer')}>
        <Col xs={12} md={4} lg={6}>
          <FacebookProvider appID="195714124244006">
          <Well className={cx('well')}>
            <div className={cx('dislike')}>
              <span>Like this if you disagree (You are wrong).</span>
              <Like href={dislikes} />
            </div>
          </Well>
          </FacebookProvider>
        </Col>
      </div>
    </Row>
  </Grid>
    );
  }
}