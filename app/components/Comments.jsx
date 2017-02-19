import React, { Component} from 'react';
import FacebookProvider, { Comments } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appID="195714124244006">
        <Comments href="http://www.butthatswrong.com/comments/episode1" />
      </FacebookProvider>
    );
  }
}