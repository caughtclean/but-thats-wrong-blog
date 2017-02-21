import React, { Component} from 'react';
import FacebookProvider, { Comments } from 'react-facebook';
import Episode from '../containers/Episode';
import styles from '../css/components/comments';

export default class Example extends Component {

 constructor(props) {
    super(props);
    this.state = {
     key: ""
    };

  }


  render() {
    const {epComments} = this.props;
    const style = {  position: 'absolute',
      top: '90%',
      left: 0,
      right: 0,
      bottom: 0
    };
        return (
          <div style={style}>
            <FacebookProvider appID="195714124244006">
              <Comments href={epComments} />
            </FacebookProvider>
          </div>

        );
  }
}