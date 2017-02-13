import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';


import configStore from './store/store';
import DevToolContainer from './containers/DevToolContainer';
import App from './containers/AppContainer';


ReactDOM.render(
  <Provider store={configStore()}>
    <div>
      <App />
      <DevToolContainer />
    </div>
  </Provider>, document.getElementById('root'));
