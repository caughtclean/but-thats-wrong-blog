import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';

export default class Example extends Component {
  onFacebookResponse(data, user_data) {
    console.log(data);
    console.log(user_data);
  }

  render() {
    return (
      <FacebookProvider appID="195714124244006">
        <Login scope="email" onResponse={this.onFacebookResponse.bind(this)}>
          <span>Login via Facebook</span>
        </Login>
      </FacebookProvider>
    );
  }
}