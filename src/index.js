import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';


import configStore from './store/store';
import DevToolContainer from './containers/DevToolContainer';
import Main from './containers/MainContainer';


ReactDOM.render(
    <Provider store={configStore()}>
      <div>
        <Main />
        <DevToolContainer />
      </div>
    </Provider>, document.getElementById('root'));
