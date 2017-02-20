import React, { Component} from 'react';
import FacebookProvider, { CommentsCount } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appID="195714124244006">
        <CommentsCount href="http://www.facebook.com" /> Comments
      </FacebookProvider>
    );
  }
}