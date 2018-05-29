/**
 * Created by lingyu on 18/5/27.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/appReducer';
const store = createStore(appReducer);
import Routes from './Routes';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
