import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/main';
import Video from '../components/Video';
import Episode from '../containers/Episode';
import FacebookProvider from 'react-facebook';


const App = ({children}) => {
  return (

    <div className='app'>
      <FacebookProvider  appID="123456789">
        {children}
      </FacebookProvider>
      <Episode />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
