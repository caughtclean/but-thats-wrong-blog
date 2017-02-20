import React, { Component } from 'react';
import Page from '../pages/Page';
import CommentsComponent from '../components/Comments';

class Comments extends Component {
  getMetaData() {
    return {
      title: this.pageTitle()

    };
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <CommentsComponent {...this.props} />
      </Page>
    );
  }
}

export default LoginOrRegister;