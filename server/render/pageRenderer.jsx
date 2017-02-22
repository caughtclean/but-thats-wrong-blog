import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import { createAppScript, createTrackingScript } from './createScripts';

const createApp = (store, props) => renderToString(
  <Provider store={store}>
    <RouterContext {...props} />
  </Provider>
);

const buildPage = ({ componentHTML, initialState }) => {
  return `
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <div id="app">${componentHTML}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    ${createAppScript()}
  </body>
</html>`;
};

export default (store, props) => {
  const initialState = store.getState();
  const componentHTML = createApp(store, props);
  return buildPage({ componentHTML, initialState});
};

